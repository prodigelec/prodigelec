const prisma = require("../config/prisma");

async function seedCustomerTypes() {
  console.log("🌱 Seeding des types de clients...");

  const types = [
    {
      code: "individual",
      name: "Particulier",
      description: "Client particulier (B2C)",
    },
    {
      code: "professional",
      name: "Professionnel",
      description: "Entreprise ou professionnel (B2B)",
    },
    {
      code: "syndic",
      name: "Syndic",
      description: "Syndic de copropriété",
    },
  ];

  try {
    for (const type of types) {
      await prisma.customerType.upsert({
        where: { code: type.code },
        update: type,
        create: type,
      });
      console.log(`✅ Type de client synchronisé: ${type.name} (${type.code})`);
    }
    console.log("🎉 Seeding des types de clients terminé !");
  } catch (error) {
    console.error("❌ Erreur pendant le seeding des types de clients:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCustomerTypes();
