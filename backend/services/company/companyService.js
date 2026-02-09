const fs = require('fs').promises;
const path = require('path');
const prisma = require('../../config/prisma');

/**
 * Mapping helper to maintain API compatibility
 */
const mapCompanyFromPrisma = (c) => {
    if (!c) return null;
    return {
        ...c,
        company_name: c.name, // compatibility with saveCompany
        vat_number: c.vatNumber,
        zip_code: c.zipCode,
        legal_form: c.legalForm,
        logo_url: c.logoUrl,
        rcs_number: c.rcsNumber,
        decennale_number: c.decennaleNumber,
        decennale_company: c.decennaleCompany,
        decennale_validity: c.decennaleValidity,
        created_at: c.createdAt,
        updated_at: c.updatedAt
    };
};

/**
 * Récupère toutes les entreprises
 */
const getAllCompanies = async () => {
    const companies = await prisma.company.findMany({
        orderBy: { name: 'asc' }
    });
    return companies.map(mapCompanyFromPrisma);
};

/**
 * Récupère une entreprise par son ID
 */
const getCompanyById = async (id) => {
    const company = await prisma.company.findUnique({
        where: { id }
    });
    return mapCompanyFromPrisma(company);
};

/**
 * Crée une nouvelle entreprise
 */
const createCompany = async (companyData) => {
    const {
        name, siret, vat_number, address, city, zip_code,
        email, phone, legal_form, logo_url, capital, rcs_number,
        decennale_number, decennale_company, decennale_validity
    } = companyData;

    const company = await prisma.company.create({
        data: {
            name,
            siret,
            vatNumber: vat_number,
            address,
            city,
            zipCode: zip_code,
            email,
            phone,
            legalForm: legal_form,
            logoUrl: logo_url,
            capital,
            rcsNumber: rcs_number,
            decennaleNumber: decennale_number,
            decennaleCompany: decennale_company,
            decennaleValidity: decennale_validity ? new Date(decennale_validity) : null
        }
    });

    return mapCompanyFromPrisma(company);
};

/**
 * Met à jour une entreprise
 */
const updateCompany = async (id, companyData) => {
    const data = {};
    if (companyData.name !== undefined) data.name = companyData.name;
    if (companyData.siret !== undefined) data.siret = companyData.siret;
    if (companyData.vat_number !== undefined) data.vatNumber = companyData.vat_number;
    if (companyData.address !== undefined) data.address = companyData.address;
    if (companyData.city !== undefined) data.city = companyData.city;
    if (companyData.zip_code !== undefined) data.zipCode = companyData.zip_code;
    if (companyData.email !== undefined) data.email = companyData.email;
    if (companyData.phone !== undefined) data.phone = companyData.phone;
    if (companyData.legal_form !== undefined) data.legalForm = companyData.legal_form;
    if (companyData.logo_url !== undefined) data.logoUrl = companyData.logo_url;
    if (companyData.capital !== undefined) data.capital = companyData.capital;
    if (companyData.rcs_number !== undefined) data.rcsNumber = companyData.rcs_number;
    if (companyData.decennale_number !== undefined) data.decennaleNumber = companyData.decennale_number;
    if (companyData.decennale_company !== undefined) data.decennaleCompany = companyData.decennale_company;
    if (companyData.decennale_validity !== undefined) {
        data.decennaleValidity = companyData.decennale_validity ? new Date(companyData.decennale_validity) : null;
    }

    const company = await prisma.company.update({
        where: { id },
        data
    });

    return mapCompanyFromPrisma(company);
};

/**
 * Supprime une entreprise
 */
const deleteCompany = async (id) => {
    await prisma.company.delete({
        where: { id }
    });
    return true;
};

// --- Specialized methods for existing controller ---

/**
 * Vérifie si un SIRET existe déjà ou récupère les infos
 */
const checkSiret = async (siret) => {
    const company = await prisma.company.findUnique({
        where: { siret }
    });

    if (company) {
        return {
            exists: true,
            company: mapCompanyFromPrisma(company)
        };
    }

    return null; // The controller handles fetching from external APIs if needed, or returns null
};

/**
 * Sauvegarde ou met à jour l'entreprise unique
 */
const saveCompany = async (companyData) => {
    const {
        companyName, siret,
        vat_number, vatNumber,
        address, city,
        zip_code, zipCode,
        email, phone,
        legal_form, legalForm,
        logo_url, logoUrl,
        logoData, capital, rcs_number,
        decennale_number, decennale_company, decennale_validity
    } = companyData;

    const finalVatNumber = vat_number || vatNumber;
    const finalZipCode = zip_code || zipCode;
    const finalLegalForm = legal_form || legalForm;
    let finalLogoUrl = logo_url || logoUrl;

    // Handle local logo storage if base64 data is provided
    if (logoData && logoData.startsWith('data:image')) {
        try {
            const matches = logoData.match(/^data:image\/([A-Za-z-+/]+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                const extension = matches[1];
                const base64Data = matches[2];
                const buffer = Buffer.from(base64Data, 'base64');

                const fileName = `logo-${siret || Date.now()}.${extension}`;
                const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'logos');
                const filePath = path.join(uploadDir, fileName);

                // Ensure directory exists
                await fs.mkdir(uploadDir, { recursive: true });

                // Write file
                await fs.writeFile(filePath, buffer);

                // Set the URL for the database (relative to the server public root)
                finalLogoUrl = `/uploads/logos/${fileName}`;
            }
        } catch (error) {
            console.error('Erreur lors de la sauvegarde locale du logo:', error);
            // On continue sans bloquer la sauvegarde de l'entreprise si le logo échoue
        }
    }

    // We assume there's only one company for the whole CRM for now
    const existing = await prisma.company.findFirst();

    if (existing) {
        // Update existing
        return await updateCompany(existing.id, {
            name: companyName,
            siret,
            vat_number: finalVatNumber,
            address,
            city,
            zip_code: finalZipCode,
            email,
            phone,
            legal_form: finalLegalForm,
            logo_url: finalLogoUrl,
            capital,
            rcs_number,
            decennale_number,
            decennale_company,
            decennale_validity
        });
    } else {
        // Create new
        return await createCompany({
            name: companyName,
            siret,
            vat_number: finalVatNumber,
            address,
            city,
            zip_code: finalZipCode,
            email,
            phone,
            legal_form: finalLegalForm,
            logo_url: finalLogoUrl,
            capital,
            rcs_number,
            decennale_number,
            decennale_company,
            decennale_validity
        });
    }
};

/**
 * Récupère l'entreprise principale
 */
const getCompany = async () => {
    const company = await prisma.company.findFirst();
    return mapCompanyFromPrisma(company);
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany,
    checkSiret,
    saveCompany,
    getCompany
};
