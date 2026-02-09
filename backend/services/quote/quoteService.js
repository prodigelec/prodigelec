const prisma = require("../../config/prisma");

/**
 * Helper to map Prisma camelCase Quote to underscore snake_case for API compatibility
 */
const emailService = require("../email/emailService");

const mapQuoteFromPrisma = (q) => {
  if (!q) return null;
  const mapped = {
    ...q,
    quote_number: q.quoteNumber,
    customer_id: q.customerId,
    company_id: q.companyId,
    total_ht: q.totalHt,
    tva_rate: q.tvaRate,
    total_tva: q.totalTva,
    total_ttc: q.totalTtc,
    issued_at: q.issuedAt,
    valid_until: q.validUntil,
    signed_at: q.signedAt,
    intervention_address: q.interventionAddress,
    intervention_city: q.interventionCity,
    intervention_zip_code: q.interventionZipCode,
    intervention_contact: q.interventionContact,
    signature_id: q.signatureId,
    signature_data: q.signatureData,
    signer_name: q.signerName,
    signer_ip: q.signerIp,
    signing_metadata: q.signingMetadata,
    created_at: q.createdAt,
    updated_at: q.updatedAt,
  };

  if (q.customer) {
    mapped.customer = {
      ...q.customer,
      company_id: q.customer.companyId,
      first_name: q.customer.firstName,
      last_name: q.customer.lastName,
      company_name: q.customer.companyName,
      zip_code: q.customer.zipCode,
      vat_number: q.customer.vatNumber,
      delivery_address: q.customer.deliveryAddress,
      delivery_city: q.customer.deliveryCity,
      delivery_zip_code: q.customer.deliveryZipCode,
      payment_terms: q.customer.paymentTerms,
      created_at: q.customer.createdAt,
      updated_at: q.customer.updatedAt,
    };
  }

  if (q.items) {
    mapped.items = q.items.map((i) => ({
      ...i,
      quote_id: i.quoteId,
      unit_price: i.unitPrice,
      tva_rate: i.tvaRate,
      total_ht: i.totalHt,
      item_type: i.itemType,
      sort_order: i.sortOrder,
      created_at: i.createdAt,
    }));
  }

  return mapped;
};

/**
 * Récupère tous les devis d'une entreprise
 */
const getAllQuotes = async (companyId) => {
  const quotes = await prisma.quote.findMany({
    where: { companyId },
    include: {
      customer: {
        select: {
          firstName: true,
          lastName: true,
          companyName: true,
          email: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
  return quotes.map(mapQuoteFromPrisma);
};

/**
 * Récupère un devis par son ID avec ses articles et les infos client
 */
const getQuoteById = async (id, companyId) => {
  const quote = await prisma.quote.findFirst({
    where: {
      id,
      companyId,
    },
    include: {
      customer: true,
      items: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  return mapQuoteFromPrisma(quote);
};

/**
 * Crée un nouveau devis avec ses articles (Transaction)
 */
const createQuote = async (quoteData) => {
  const { items, ...mainQuoteData } = quoteData;

  const quote = await prisma.quote.create({
    data: {
      companyId: mainQuoteData.company_id,
      customerId: mainQuoteData.customer_id,
      quoteNumber: mainQuoteData.quote_number,
      status: mainQuoteData.status,
      totalHt: mainQuoteData.total_ht,
      tvaRate: mainQuoteData.tva_rate,
      totalTva: mainQuoteData.total_tva,
      totalTtc: mainQuoteData.total_ttc,
      issuedAt: mainQuoteData.issued_at
        ? new Date(mainQuoteData.issued_at)
        : new Date(),
      validUntil: mainQuoteData.valid_until
        ? new Date(mainQuoteData.valid_until)
        : null,
      interventionAddress: mainQuoteData.intervention_address,
      interventionCity: mainQuoteData.intervention_city,
      interventionZipCode: mainQuoteData.intervention_zip_code,
      interventionContact: mainQuoteData.intervention_contact,
      notes: mainQuoteData.notes,
      terms: mainQuoteData.terms,
      items: {
        create: (items || []).map((item) => ({
          description: item.description,
          quantity: item.quantity,
          unitPrice: item.unit_price,
          tvaRate: item.tva_rate,
          totalHt: item.total_ht,
          itemType: item.item_type,
          unit: item.unit,
          sortOrder: item.sort_order,
        })),
      },
    },
    include: {
      customer: true,
      items: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  return mapQuoteFromPrisma(quote);
};

/**
 * Met à jour un devis et ses articles (Transaction)
 */
const updateQuote = async (id, quoteData) => {
  const { items, customer, ...mainQuoteData } = quoteData;

  // Vérifier si le devis peut être modifié (pas signé ni facturé)
  const currentQuote = await prisma.quote.findUnique({
    where: { id },
    select: { status: true },
  });

  if (!currentQuote) {
    const error = new Error("Devis non trouvé");
    error.statusCode = 404;
    throw error;
  }

  if (["signed", "invoiced"].includes(currentQuote.status)) {
    const businessError = new Error(
      `Impossible de modifier un devis déjà ${currentQuote.status === "signed" ? "signé" : "facturé"}.`,
    );
    businessError.statusCode = 403;
    throw businessError;
  }

  // Mapping fields
  const data = {};
  if (mainQuoteData.quote_number !== undefined)
    data.quoteNumber = mainQuoteData.quote_number;
  if (mainQuoteData.status !== undefined) data.status = mainQuoteData.status;
  if (mainQuoteData.total_ht !== undefined)
    data.totalHt = mainQuoteData.total_ht;
  if (mainQuoteData.tva_rate !== undefined)
    data.tvaRate = mainQuoteData.tva_rate;
  if (mainQuoteData.total_tva !== undefined)
    data.totalTva = mainQuoteData.total_tva;
  if (mainQuoteData.total_ttc !== undefined)
    data.totalTtc = mainQuoteData.total_ttc;
  if (mainQuoteData.issued_at !== undefined)
    data.issuedAt = mainQuoteData.issued_at
      ? new Date(mainQuoteData.issued_at)
      : null;
  if (mainQuoteData.valid_until !== undefined)
    data.validUntil = mainQuoteData.valid_until
      ? new Date(mainQuoteData.valid_until)
      : null;
  if (mainQuoteData.intervention_address !== undefined)
    data.interventionAddress = mainQuoteData.intervention_address;
  if (mainQuoteData.intervention_city !== undefined)
    data.interventionCity = mainQuoteData.intervention_city;
  if (mainQuoteData.intervention_zip_code !== undefined)
    data.interventionZipCode = mainQuoteData.intervention_zip_code;
  if (mainQuoteData.intervention_contact !== undefined)
    data.interventionContact = mainQuoteData.intervention_contact;
  if (mainQuoteData.notes !== undefined) data.notes = mainQuoteData.notes;
  if (mainQuoteData.terms !== undefined) data.terms = mainQuoteData.terms;

  // Use transaction for nested items update (Delete + Create)
  const result = await prisma.$transaction(async (tx) => {
    if (items) {
      await tx.quoteItem.deleteMany({
        where: { quoteId: id },
      });

      if (items.length > 0) {
        await tx.quoteItem.createMany({
          data: items.map((item) => ({
            quoteId: id,
            description: item.description,
            quantity: item.quantity,
            unitPrice: item.unit_price,
            tvaRate: item.tva_rate,
            totalHt: item.total_ht,
            itemType: item.item_type,
            unit: item.unit,
            sortOrder: item.sort_order,
          })),
        });
      }
    }

    return await tx.quote.update({
      where: { id },
      data,
      include: {
        customer: true,
        items: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });
  });

  return mapQuoteFromPrisma(result);
};

/**
 * Met à jour uniquement le statut d'un devis
 */
const updateQuoteStatus = async (
  id,
  companyId,
  status,
  additionalData = {},
) => {
  // Vérifier si le devis existe et n'est pas déjà dans un état final
  const currentQuote = await prisma.quote.findUnique({
    where: { id },
    select: { status: true },
  });

  if (!currentQuote) {
    const error = new Error("Devis non trouvé");
    error.statusCode = 404;
    throw error;
  }

  // Si le devis est déjà signé ou facturé, on ne peut plus changer son statut
  // (sauf peut-être vers 'invoiced' si c'était 'signed', mais ici on bloque tout changement post-signature pour la sécurité)
  if (
    ["signed", "invoiced"].includes(currentQuote.status) &&
    status !== currentQuote.status
  ) {
    // Exception : on permet de passer de 'signed' à 'invoiced'
    if (!(currentQuote.status === "signed" && status === "invoiced")) {
      const businessError = new Error(
        `Impossible de modifier le statut d'un devis déjà ${currentQuote.status === "signed" ? "signé" : "facturé"}.`,
      );
      businessError.statusCode = 403;
      throw businessError;
    }
  }

  const data = { status, updatedAt: new Date() };

  // Map additionalData underscores to camelCase
  if (additionalData.signed_at !== undefined)
    data.signedAt = additionalData.signed_at
      ? new Date(additionalData.signed_at)
      : null;
  if (additionalData.signature_id !== undefined)
    data.signatureId = additionalData.signature_id;
  if (additionalData.signature_data !== undefined)
    data.signatureData = additionalData.signature_data;
  if (additionalData.signer_name !== undefined)
    data.signerName = additionalData.signer_name;
  if (additionalData.signer_ip !== undefined)
    data.signerIp = additionalData.signer_ip;
  if (additionalData.signing_metadata !== undefined)
    data.signingMetadata = additionalData.signing_metadata;

  const result = await prisma.quote.update({
    where: {
      id,
      companyId,
    },
    data,
    include: {
      customer: true,
    },
  });
  return mapQuoteFromPrisma(result);
};

/**
 * Supprime un devis
 */
const deleteQuote = async (id, companyId) => {
  const quote = await prisma.quote.findFirst({
    where: { id, companyId },
    select: { status: true },
  });

  if (!quote) {
    const error = new Error("Devis non trouvé");
    error.statusCode = 404;
    throw error;
  }

  if (quote.status !== "draft") {
    const businessError = new Error(
      "Seuls les devis en brouillon peuvent être supprimés.",
    );
    businessError.statusCode = 403; // Forbidden
    throw businessError;
  }

  await prisma.quote.delete({
    where: {
      id,
      companyId,
    },
  });
  return true;
};

/**
 * Envoie un devis par email avec sa pièce jointe
 */
const sendQuoteByEmail = async (id, companyId, pdfBase64) => {
  const quote = await prisma.quote.findFirst({
    where: { id, companyId },
    include: { customer: true },
  });

  if (!quote) {
    const error = new Error("Devis non trouvé");
    error.statusCode = 404;
    throw error;
  }

  if (!quote.customer || !quote.customer.email) {
    const error = new Error("Le client n'a pas d'adresse email renseignée");
    error.statusCode = 400;
    throw error;
  }

  // Convertir base64 en buffer
  const pdfBuffer = Buffer.from(pdfBase64, "base64");

  const customerName =
    quote.customer.companyName ||
    `${quote.customer.firstName || ""} ${quote.customer.lastName || ""}`.trim();

  // Envoyer l'email
  await emailService.sendQuoteWithAttachment(
    quote.customer.email,
    customerName,
    quote.quoteNumber,
    pdfBuffer,
  );

  // Mettre à jour le statut si c'était en brouillon
  if (quote.status === "draft") {
    await prisma.quote.update({
      where: { id },
      data: { status: "sent", updatedAt: new Date() },
    });
  }

  return { success: true };
};

module.exports = {
  getAllQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  updateQuoteStatus,
  deleteQuote,
  sendQuoteByEmail,
};
