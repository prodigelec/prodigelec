const prisma = require('../config/prisma');

async function seed() {
    console.log('🌱 Démarrage du seeding des clients...');

    try {
        // 1. Récupérer l'entreprise principale
        const company = await prisma.company.findFirst();
        if (!company) {
            console.error('❌ Erreur: Aucune entreprise trouvée. Veuillez d\'abord remplir l\'onboarding.');
            process.exit(1);
        }

        const companyId = company.id;
        console.log(`🏢 Utilisation de la société: ${company.name} (${companyId})`);

        const customers = [
            // Individuels
            {
                type: 'individual',
                firstName: 'Jean',
                lastName: 'Dupont',
                email: 'jean.dupont@email.com',
                phone: '0612345678',
                address: '12 rue de la Paix',
                city: 'Paris',
                zipCode: '75002',
                notes: 'Client historique'
            },
            {
                type: 'individual',
                firstName: 'Marie',
                lastName: 'Lefebvre',
                email: 'm.lefebvre@gmail.com',
                phone: '0789456123',
                address: '45 avenue des Champs-Élysées',
                city: 'Paris',
                zipCode: '75008',
                notes: 'Contactée via le site web'
            },
            {
                type: 'individual',
                firstName: 'Pierre',
                lastName: 'Martin',
                email: 'pmartin@yahoo.fr',
                phone: '0654123987',
                address: '8 rue du Commerce',
                city: 'Lyon',
                zipCode: '69002'
            },
            {
                type: 'individual',
                firstName: 'Sophie',
                lastName: 'Bernard',
                email: 'sophie.b@outlook.com',
                phone: '0622334455',
                address: '15 place Bellecour',
                city: 'Lyon',
                zipCode: '69002'
            },
            {
                type: 'individual',
                firstName: 'Lucas',
                lastName: 'Petit',
                email: 'lucas.petit@bbox.fr',
                phone: '0711223344',
                address: '22 quai des Chartrons',
                city: 'Bordeaux',
                zipCode: '33000'
            },
            {
                type: 'individual',
                firstName: 'Emma',
                lastName: 'Moreau',
                email: 'emma.moreau@free.fr',
                phone: '0688776655',
                address: '5 rue Sainte-Catherine',
                city: 'Bordeaux',
                zipCode: '33000'
            },
            {
                type: 'individual',
                firstName: 'Thomas',
                lastName: 'Roux',
                email: 't.roux@sfr.fr',
                phone: '0744556677',
                address: '10 rue de la République',
                city: 'Marseille',
                zipCode: '13001'
            },
            {
                type: 'individual',
                firstName: 'Camille',
                lastName: 'Simon',
                email: 'c.simon@laposte.net',
                phone: '0633221144',
                address: '30 La Canebière',
                city: 'Marseille',
                zipCode: '13001'
            },
            // Professionnels
            {
                type: 'business',
                companyName: 'Boulangerie de la Halle',
                email: 'contact@boulangerie-halle.fr',
                phone: '0142365897',
                address: '1 place de la Halle',
                city: 'Chartres',
                zipCode: '28000',
                siret: '12345678901234',
                vatNumber: 'FR12123456789',
                notes: 'Maintenance préventive bimestrielle'
            },
            {
                type: 'business',
                companyName: 'Garage du Centre',
                email: 'info@garageducentre.com',
                phone: '0237458963',
                address: '15 route nationale',
                city: 'Lucé',
                zipCode: '28110',
                siret: '98765432109876',
                notes: 'Nouveau client'
            },
            {
                type: 'business',
                companyName: 'Hôtel Splendid',
                email: 'direction@hotel-splendid.fr',
                phone: '0493887766',
                address: '50 Promenade des Anglais',
                city: 'Nice',
                zipCode: '06000',
                siret: '45678912300045'
            },
            {
                type: 'business',
                companyName: 'Restaurant Le Gourmet',
                email: 'resa@legourmet-lyon.fr',
                phone: '0478423695',
                address: '12 rue Mercière',
                city: 'Lyon',
                zipCode: '69002',
                siret: '32165498700012'
            },
            {
                type: 'business',
                companyName: 'Pharmacie Principale',
                email: 'pharma.principale@gmail.com',
                phone: '0145632589',
                address: '100 boulevard Saint-Germain',
                city: 'Paris',
                zipCode: '75005',
                siret: '78912345600078'
            },
            {
                type: 'business',
                companyName: 'Agence Immobilière Nexity',
                email: 'accueil.lyon@nexity.fr',
                phone: '0472456321',
                address: '25 cours Lafayette',
                city: 'Lyon',
                zipCode: '69006',
                siret: '65432178900065'
            },
            {
                type: 'business',
                companyName: 'Café de Flore',
                email: 'contact@cafedeflore.fr',
                phone: '0145485526',
                address: '172 boulevard Saint-Germain',
                city: 'Paris',
                zipCode: '75006',
                siret: '14725836900014'
            },
            // Syndics
            {
                type: 'syndic',
                companyName: 'Foncia - Agence de la Gare',
                email: 'gestion.gare@foncia.fr',
                phone: '0122334455',
                address: '10 place Colbert',
                city: 'Versailles',
                zipCode: '78000',
                deliveryAddress: '4 bis rue de l\'Abreuvoir (Immeuble Le Grand Siècle)',
                deliveryCity: 'Versailles',
                deliveryZipCode: '78000',
                siret: '55223344500011',
                notes: 'Plusieurs résidences en gestion'
            },
            {
                type: 'syndic',
                companyName: 'Nexity - Gestion Location',
                email: 'lyon.gestion@nexity.fr',
                phone: '0478965412',
                address: '25 cours Lafayette',
                city: 'Lyon',
                zipCode: '69006',
                deliveryAddress: '112 avenue Thiers',
                deliveryCity: 'Lyon',
                deliveryZipCode: '69006',
                siret: '88776655400022'
            },
            {
                type: 'syndic',
                companyName: 'Immo-Pro Syndic',
                email: 'contact@immopro-syndic.com',
                phone: '0555443322',
                address: '50 rue de la République',
                city: 'Bordeaux',
                zipCode: '33000',
                deliveryAddress: 'Res. Les Oliviers, 12 Rue du Maine',
                deliveryCity: 'Bordeaux',
                deliveryZipCode: '33000',
                siret: '99887766500033'
            }
        ];

        console.log(`⏳ Insertion de ${customers.length} clients...`);

        for (const customerData of customers) {
            await prisma.customer.create({
                data: {
                    ...customerData,
                    companyId: companyId
                }
            });
        }

        console.log('✅ Seeding terminé avec succès !');

    } catch (error) {
        console.error('❌ Erreur pendant le seeding:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
