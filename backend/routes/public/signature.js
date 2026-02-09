const express = require("express");
const router = express.Router();
const signatureService = require("../../services/signature/signatureService");
const { verifyPublicToken } = require("../../middleware/auth");
const prisma = require("../../config/prisma");

/**
 * Mapping helper to maintain API compatibility (underscores)
 */
const mapDocumentFromPrisma = (q) => {
  if (!q) return null;
  return {
    ...q,
    quote_number: q.quoteNumber,
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
    customer: q.customer
      ? {
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
        }
      : null,
    company: q.company
      ? {
          ...q.company,
          vat_number: q.company.vatNumber,
          zip_code: q.company.zipCode,
          legal_form: q.company.legalForm,
          logo_url: q.company.logoUrl,
          rcs_number: q.company.rcsNumber,
          decennale_number: q.company.decennaleNumber,
          decennale_company: q.company.decennaleCompany,
          decennale_validity: q.company.decennaleValidity,
          created_at: q.company.createdAt,
          updated_at: q.company.updatedAt,
        }
      : null,
    items: q.items
      ? q.items.map((i) => ({
          ...i,
          quote_id: i.quoteId,
          unit_price: i.unitPrice,
          tva_rate: i.tvaRate,
          total_ht: i.totalHt,
          item_type: i.itemType,
          sort_order: i.sortOrder,
          created_at: i.createdAt,
        }))
      : [],
  };
};

/**
 * Routes publiques pour la gestion des signatures électroniques
 */

// Récupérer les détails du document via lien public
router.get("/document", verifyPublicToken, async (req, res, next) => {
  try {
    const tokenInfo = req.tokenInfo;

    if (tokenInfo.documentType !== "quote") {
      return res.status(404).json({
        success: false,
        error: "Seuls les devis sont supportés pour le moment",
      });
    }

    const document = await prisma.quote.findUnique({
      where: { id: tokenInfo.documentId },
      include: {
        customer: true,
        company: true,
        items: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        error: "Document non trouvé",
      });
    }

    res.json({
      success: true,
      document: mapDocumentFromPrisma(document),
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du document public:", error);
    next(error);
  }
});

// Créer une signature électronique via lien public
router.post("/signature/create", verifyPublicToken, async (req, res, next) => {
  try {
    const { documentId, documentType, signerInfo, signatureImage } = req.body;
    const tokenInfo = req.tokenInfo;

    if (!documentId || !documentType || !signerInfo) {
      return res.status(400).json({
        success: false,
        error: "Données de signature incomplètes",
      });
    }

    if (
      tokenInfo.documentId !== documentId ||
      tokenInfo.documentType !== documentType
    ) {
      return res.status(403).json({
        success: false,
        error: "Token invalide pour ce document",
      });
    }

    if (documentType !== "quote") {
      return res.status(400).json({
        success: false,
        error: "Seuls les devis peuvent être signés",
      });
    }

    const document = await prisma.quote.findUnique({
      where: { id: documentId },
      include: {
        items: true,
      },
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        error: "Document non trouvé",
      });
    }

    const documentData = {
      id: document.id,
      number: document.quoteNumber,
      total: document.totalTtc,
      customer: document.customerId,
      created_at: document.createdAt,
      items: document.items,
    };

    const documentInfo = {
      id: document.id,
      type: documentType,
      title: `Devis ${document.quoteNumber}`,
      version: "1.0",
    };

    const signatureResult = await signatureService.signDocumentComplete(
      documentData,
      signerInfo,
      documentInfo,
      signatureImage,
    );

    if (!signatureResult.success) {
      return res.status(500).json({
        success: false,
        error: signatureResult.error,
      });
    }

    // Transaction Prisma pour mettre à jour le document et le token
    await prisma.$transaction([
      prisma.quote.update({
        where: { id: documentId },
        data: {
          status: "signed",
          signedAt: new Date(),
          signatureId: signatureResult.signatureId,
        },
      }),
      prisma.publicToken.update({
        where: { token: tokenInfo.token },
        data: {
          usedAt: new Date(),
          status: "used",
        },
      }),
    ]);

    res.json({
      success: true,
      signatureId: signatureResult.signatureId,
      certificate: signatureResult.certificate,
      message: "Signature électronique créée avec succès",
    });
  } catch (error) {
    console.error(
      "Erreur lors de la création de la signature publique:",
      error,
    );
    next(error);
  }
});

// Vérifier la validité d'une signature publique
router.get(
  "/signature/verify/:signatureId",
  verifyPublicToken,
  async (req, res, next) => {
    try {
      const { signatureId } = req.params;
      const tokenInfo = req.tokenInfo;

      const verificationResult =
        await signatureService.verifySignatureValidity(signatureId);

      if (!verificationResult.isValid) {
        return res.status(404).json({
          success: false,
          error: verificationResult.reason,
        });
      }

      if (verificationResult.signature.document_id !== tokenInfo.documentId) {
        return res.status(403).json({
          success: false,
          error: "Signature non autorisée pour ce document",
        });
      }

      res.json({
        success: true,
        isValid: verificationResult.isValid,
        signature: verificationResult.signature,
      });
    } catch (error) {
      console.error("Erreur lors de la vérification de la signature:", error);
      next(error);
    }
  },
);

// Récupérer les détails d'une signature publique
router.get(
  "/signature/:signatureId",
  verifyPublicToken,
  async (req, res, next) => {
    try {
      const { signatureId } = req.params;
      const tokenInfo = req.tokenInfo;

      const signatureDetails = await signatureService.getSignature(signatureId);

      if (signatureDetails.document_id !== tokenInfo.documentId) {
        return res.status(403).json({
          success: false,
          error: "Signature non autorisée pour ce document",
        });
      }

      res.json({
        success: true,
        signature: signatureDetails,
      });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails de la signature:",
        error,
      );
      next(error);
    }
  },
);

module.exports = router;
