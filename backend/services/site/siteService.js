const prisma = require('../../config/prisma');

/**
 * Mapping helper for API compatibility
 */
const mapSiteFromPrisma = (s) => {
    if (!s) return null;
    return {
        ...s,
        company_id: s.companyId,
        customer_id: s.customerId,
        zip_code: s.zipCode,
        contact_name: s.contactName,
        contact_email: s.contactEmail,
        contact_phone: s.contactPhone,
        access_code: s.accessCode,
        created_at: s.createdAt,
        updated_at: s.updatedAt
    };
};

/**
 * Récupère tous les sites d'une entreprise
 */
const getAllSites = async (companyId) => {
    const sites = await prisma.site.findMany({
        where: { companyId },
        orderBy: { name: 'asc' }
    });
    return sites.map(mapSiteFromPrisma);
};

/**
 * Récupère les sites d'un client spécifique
 */
const getSitesByCustomer = async (customerId, companyId) => {
    const sites = await prisma.site.findMany({
        where: {
            customerId,
            companyId
        },
        orderBy: { name: 'asc' }
    });
    return sites.map(mapSiteFromPrisma);
};

/**
 * Récupère un site par son ID
 */
const getSiteById = async (id, companyId) => {
    const site = await prisma.site.findFirst({
        where: {
            id,
            companyId
        }
    });
    return mapSiteFromPrisma(site);
};

/**
 * Crée un nouveau site
 */
const createSite = async (siteData) => {
    const {
        company_id, customer_id, name, address, city, zip_code,
        contact_name, contact_email, contact_phone,
        access_code, floor, apartment, notes
    } = siteData;

    const site = await prisma.site.create({
        data: {
            companyId: company_id,
            customerId: customer_id,
            name,
            address,
            city,
            zipCode: zip_code,
            contactName: contact_name,
            contactEmail: contact_email,
            contactPhone: contact_phone,
            accessCode: access_code,
            floor,
            apartment,
            notes
        }
    });

    return mapSiteFromPrisma(site);
};

/**
 * Met à jour un site
 */
const updateSite = async (id, companyId, siteData) => {
    const data = {};
    if (siteData.name !== undefined) data.name = siteData.name;
    if (siteData.address !== undefined) data.address = siteData.address;
    if (siteData.city !== undefined) data.city = siteData.city;
    if (siteData.zip_code !== undefined) data.zipCode = siteData.zip_code;
    if (siteData.contact_name !== undefined) data.contactName = siteData.contact_name;
    if (siteData.contact_email !== undefined) data.contactEmail = siteData.contact_email;
    if (siteData.contact_phone !== undefined) data.contactPhone = siteData.contact_phone;
    if (siteData.access_code !== undefined) data.accessCode = siteData.access_code;
    if (siteData.floor !== undefined) data.floor = siteData.floor;
    if (siteData.apartment !== undefined) data.apartment = siteData.apartment;
    if (siteData.notes !== undefined) data.notes = siteData.notes;

    const site = await prisma.site.update({
        where: {
            id,
            companyId
        },
        data
    });

    return mapSiteFromPrisma(site);
};

/**
 * Supprime un site
 */
const deleteSite = async (id, companyId) => {
    await prisma.site.delete({
        where: {
            id,
            companyId
        }
    });
    return true;
};

module.exports = {
    getAllSites,
    getSitesByCustomer,
    getSitesByCustomerId: getSitesByCustomer, // Alias for backward compatibility
    getSiteById,
    createSite,
    updateSite,
    deleteSite
};
