const { supabase } = require('../config/supabase');
const axios = require('axios');

class CompanyService {
    async checkSiret(siret) {
        const cleanSiret = siret.replace(/\s/g, '');

        // 1. Check if company exists in our DB
        const { data: existingCompany, error: dbError } = await supabase
            .from('companies')
            .select('*')
            .eq('siret', cleanSiret)
            .maybeSingle();

        if (dbError) {
            console.error('Database Error:', dbError);
            throw new Error('Erreur de base de données');
        }

        if (existingCompany) {
            return {
                exists: true,
                company: {
                    companyName: existingCompany.name,
                    siret: existingCompany.siret,
                    vatNumber: existingCompany.vat_number,
                    address: existingCompany.address,
                    city: existingCompany.city,
                    zipCode: existingCompany.zip_code,
                    email: existingCompany.email,
                    phone: existingCompany.phone,
                    legalForm: existingCompany.legal_form,
                    logoUrl: existingCompany.logo_url
                }
            };
        }

        // 2. If not found locally, fetch from API Gouv
        try {
            const response = await axios.get(`https://recherche-entreprises.api.gouv.fr/search`, {
                params: {
                    q: cleanSiret,
                    per_page: 1
                }
            });

            const data = response.data;

            if (data.results && data.results.length > 0) {
                const company = data.results[0];
                
                return {
                    exists: false,
                    company: {
                        companyName: company.nom_complet,
                        siret: company.siret,
                        vatNumber: company.numero_tva_intra || '',
                        address: company.siege.geo_adresse || `${company.siege.numero_voie || ''} ${company.siege.type_voie || ''} ${company.siege.libelle_voie || ''}`,
                        city: company.siege.libelle_commune,
                        zipCode: company.siege.code_postal,
                        legalForm: company.nature_juridique
                    }
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error('API Gouv Error:', error);
            throw new Error('Erreur lors de la communication avec l\'API gouvernementale');
        }
    }

    async saveCompany(companyData) {
        const { companyName, siret, vatNumber, address, city, zipCode, email, phone, legalForm, logoUrl } = companyData;

        // Check if company exists
        const { data: existingCompany } = await supabase
            .from('companies')
            .select('id')
            .eq('siret', siret)
            .maybeSingle();

        if (existingCompany) {
            throw new Error('Cette société est déjà enregistrée.');
        }

        const { data, error } = await supabase
            .from('companies')
            .insert({
                name: companyName,
                siret,
                vat_number: vatNumber,
                address,
                city,
                zip_code: zipCode,
                email,
                phone,
                legal_form: legalForm,
                logo_url: logoUrl,
                updated_at: new Date()
            })
            .select()
            .single();

        if (error) {
            throw error;
        }

        return data;
    }

    async getCompany() {
        // Retrieve the first registered company (Single Tenant logic for now)
        const { data: company, error } = await supabase
            .from('companies')
            .select('*')
            .limit(1)
            .maybeSingle();

        if (error) {
            throw error;
        }

        if (!company) {
            return null;
        }

        return {
            id: company.id,
            companyName: company.name,
            siret: company.siret,
            vatNumber: company.vat_number,
            address: company.address,
            city: company.city,
            zipCode: company.zip_code,
            email: company.email,
            phone: company.phone,
            legalForm: company.legal_form,
            logoUrl: company.logo_url
        };
    }
}

module.exports = new CompanyService();
