const prisma = require('../config/prisma');

async function check() {
    try {
        const count = await prisma.customer.count();
        const customers = await prisma.customer.findMany({
            take: 5,
            select: { id: true, lastName: true, companyName: true, type: true }
        });

        console.log(`📊 Nombre total de clients en base: ${count}`);
        console.log('📝 Aperçu des 5 derniers clients:');
        console.table(customers);
    } catch (error) {
        console.error('❌ Erreur lors de la vérification:', error);
    } finally {
        await prisma.$disconnect();
    }
}

check();
