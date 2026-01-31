const { supabase } = require('../config/supabase');

const checkSiret = async (req, res) => {
    const { siret } = req.query;

    if (!siret) {
        return res.status(400).json({ error: 'SIRET manquant' });
    }

    const cleanSiret = siret.replace(/\s/g, '');

    if (cleanSiret.length !== 14) {
        return res.status(400).json({ error: 'Le SIRET doit contenir 14 chiffres' });
    }

    try {
        // 1. Check if company exists in our DB
        const { data: existingCompany, error: dbError } = await supabase
            .from('companies')
            .select('*')
            .eq('siret', cleanSiret)
            .single();

        if (existingCompany) {
            return res.json({
                exists: true,
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
            });
        }

        // 2. If not found locally, fetch from API Gouv
        const response = await fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${cleanSiret}&per_page=1`);
        
        if (!response.ok) {
            throw new Error('Erreur API Gouv');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const company = data.results[0];
            
            const formattedData = {
                companyName: company.nom_complet,
                siret: company.siret,
                vatNumber: company.numero_tva_intra || '',
                address: company.siege.geo_adresse || `${company.siege.numero_voie || ''} ${company.siege.type_voie || ''} ${company.siege.libelle_voie || ''}`,
                city: company.siege.libelle_commune,
                zipCode: company.siege.code_postal,
                legalForm: company.nature_juridique
            };

            return res.json(formattedData);
        } else {
            return res.status(404).json({ error: 'Aucune entreprise trouvée avec ce SIRET' });
        }

    } catch (error) {
        console.error('SIRET Check Error:', error);
        return res.status(500).json({ error: 'Impossible de vérifier le SIRET pour le moment' });
    }
};

const saveCompany = async (req, res) => {
    try {
        const { companyName, siret, vatNumber, address, city, zipCode, email, phone, legalForm, logoUrl } = req.body;

        // Validation basique
        if (!companyName || !siret || !email) {
            return res.status(400).json({ error: 'Champs obligatoires manquants (Nom, SIRET, Email)' });
        }

        // Check if company exists (optional: singleton logic for this app?)
        // Assuming we store one main company or many, let's insert/upsert
        const { data: existingCompany } = await supabase
            .from('companies')
            .select('id')
            .eq('siret', siret)
            .single();

        if (existingCompany) {
            return res.status(409).json({ error: 'Cette société est déjà enregistrée.' });
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

        res.json({ success: true, company: data });

    } catch (error) {
        console.error('Save Company Error:', error);
        res.status(500).json({ error: 'Erreur lors de la sauvegarde de la société' });
    }
};

const getCompany = async (req, res) => {
    try {
        // Retrieve the first registered company (Single Tenant logic for now)
        const { data: company, error } = await supabase
            .from('companies')
            .select('*')
            .limit(1)
            .single();

        if (error && error.code !== 'PGRST116') { // PGRST116 is "No rows found"
            throw error;
        }

        if (!company) {
            return res.json({ exists: false });
        }

        return res.json({
            exists: true,
            company: {
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
            }
        });

    } catch (error) {
        console.error('Get Company Error:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération de la société' });
    }
};

module.exports = {
    checkSiret,
    saveCompany,
    getCompany
};
