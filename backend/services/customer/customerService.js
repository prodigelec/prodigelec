const prisma = require('../../config/prisma');

/**
 * Mapping helper for API compatibility
 */
const mapCustomerFromPrisma = (c) => {
    if (!c) return null;
    return {
        ...c,
        company_id: c.companyId,
        first_name: c.firstName,
        last_name: c.lastName,
        company_name: c.companyName,
        zip_code: c.zipCode,
        vat_number: c.vatNumber,
        delivery_address: c.deliveryAddress,
        delivery_city: c.deliveryCity,
        delivery_zip_code: c.deliveryZipCode,
        payment_terms: c.paymentTerms,
        created_at: c.createdAt,
        updated_at: c.updatedAt,
        type: c.customerType?.code // Récupérer le code du type pour la compatibilité
    };
};

/**
 * Récupère tous les clients d'une entreprise
 */
const getAllCustomers = async (companyId) => {
    const customers = await prisma.customer.findMany({
        where: { companyId },
        include: {
            customerType: true
        },
        orderBy: { createdAt: 'desc' }
    });
    return customers.map(mapCustomerFromPrisma);
};

/**
 * Récupère un client par son ID
 */
const getCustomerById = async (id, companyId) => {
    const customer = await prisma.customer.findFirst({
        where: {
            id,
            companyId
        },
        include: {
            customerType: true
        }
    });
    return mapCustomerFromPrisma(customer);
};

/**
 * Helper pour trouver l'ID du type de client par son code
 */
const getCustomerTypeIdByCode = async (code) => {
    const type = await prisma.customerType.findUnique({
        where: { code }
    });
    if (!type) throw new Error(`Type de client '${code}' non trouvé`);
    return type.id;
};

/**
 * Crée un nouveau client
 */
const createCustomer = async (customerData) => {
    const {
        company_id, type, first_name, last_name, company_name,
        email, phone, address, city, zip_code, siret,
        vat_number, delivery_address, delivery_city,
        delivery_zip_code, payment_terms, notes
    } = customerData;

    try {
        const customerTypeId = await getCustomerTypeIdByCode(type);

        const customer = await prisma.customer.create({
            data: {
                companyId: company_id,
                customerTypeId: customerTypeId,
                firstName: first_name || '',
                lastName: last_name || '',
                companyName: company_name || '',
                email,
                phone,
                address,
                city,
                zipCode: zip_code,
                siret,
                vatNumber: vat_number,
                deliveryAddress: delivery_address,
                deliveryCity: delivery_city,
                deliveryZipCode: delivery_zip_code,
                paymentTerms: payment_terms,
                notes
            },
            include: {
                customerType: true
            }
        });

        return mapCustomerFromPrisma(customer);
    } catch (error) {
        if (error.code === 'P2002') {
            const businessError = new Error('Un client avec ce nom et ce prénom existe déjà pour cette société.');
            businessError.statusCode = 409;
            throw businessError;
        }
        throw error;
    }
};

/**
 * Met à jour un client
 */
const updateCustomer = async (id, companyId, customerData) => {
    const data = {};
    
    try {
        if (customerData.type !== undefined) {
            data.customerTypeId = await getCustomerTypeIdByCode(customerData.type);
        }
        
        if (customerData.first_name !== undefined) data.firstName = customerData.first_name || '';
        if (customerData.last_name !== undefined) data.lastName = customerData.last_name || '';
        if (customerData.company_name !== undefined) data.companyName = customerData.company_name || '';
        if (customerData.email !== undefined) data.email = customerData.email;
        if (customerData.phone !== undefined) data.phone = customerData.phone;
        if (customerData.address !== undefined) data.address = customerData.address;
        if (customerData.city !== undefined) data.city = customerData.city;
        if (customerData.zip_code !== undefined) data.zipCode = customerData.zip_code;
        if (customerData.siret !== undefined) data.siret = customerData.siret;
        if (customerData.vat_number !== undefined) data.vatNumber = customerData.vat_number;
        if (customerData.delivery_address !== undefined) data.deliveryAddress = customerData.delivery_address;
        if (customerData.delivery_city !== undefined) data.deliveryCity = customerData.delivery_city;
        if (customerData.delivery_zip_code !== undefined) data.deliveryZipCode = customerData.delivery_zip_code;
        if (customerData.payment_terms !== undefined) data.paymentTerms = customerData.payment_terms;
        if (customerData.notes !== undefined) data.notes = customerData.notes;

        const customer = await prisma.customer.update({
            where: {
                id,
                companyId
            },
            data,
            include: {
                customerType: true
            }
        });

        return mapCustomerFromPrisma(customer);
    } catch (error) {
        if (error.code === 'P2002') {
            const businessError = new Error('Un client avec ce nom et ce prénom existe déjà pour cette société.');
            businessError.statusCode = 409;
            throw businessError;
        }
        throw error;
    }
};

/**
 * Supprime un client
 */
const deleteCustomer = async (id, companyId) => {
    // Vérifier si le client a des devis (quotes)
    const quotesCount = await prisma.quote.count({
        where: {
            customerId: id,
            companyId: companyId
        }
    });

    if (quotesCount > 0) {
        const businessError = new Error('Impossible de supprimer ce client car il possède des devis ou factures associés.');
        businessError.statusCode = 403; // Forbidden
        throw businessError;
    }

    await prisma.customer.delete({
        where: {
            id,
            companyId
        }
    });
    return true;
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
