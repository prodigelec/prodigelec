const prisma = require("../config/prisma");

async function cleanupCustomers() {
  console.log("🧹 Démarrage du nettoyage de la base de données customers...");

  try {
    // 1. Compter les customers avant suppression
    const countBefore = await prisma.customer.count();
    console.log(`📊 Nombre de clients avant nettoyage: ${countBefore}`);

    if (countBefore === 0) {
      console.log("✅ Aucun client à supprimer, la base est déjà propre.");
      return;
    }

    // 2. Vérifier s'il y a des devis liés
    const quotesCount = await prisma.quote.count();
    console.log(`📋 Nombre total de devis: ${quotesCount}`);

    if (quotesCount > 0) {
      console.log(`⚠️  Attention: ${quotesCount} devis trouvés.`);
      console.log("🔄 Suppression des devis liés aux clients...");

      // Supprimer les devis qui ont des références customers
      const deletedQuotes = await prisma.quote.deleteMany({});
      console.log(`✅ ${deletedQuotes.count} devis supprimés.`);
    }

    // 3. Vérifier s'il y a des sites liés
    const sitesCount = await prisma.site.count();
    console.log(`🏗️  Nombre total de sites: ${sitesCount}`);

    if (sitesCount > 0) {
      console.log(`⚠️  Attention: ${sitesCount} sites trouvés.`);
      console.log("🔄 Suppression des sites liés aux clients...");

      // Supprimer les sites qui ont des références customers
      const deletedSites = await prisma.site.deleteMany({});
      console.log(`✅ ${deletedSites.count} sites supprimés.`);
    }

    // 4. Supprimer tous les customers
    console.log("🗑️  Suppression de tous les clients...");
    const deleteResult = await prisma.customer.deleteMany({});
    console.log(`✅ ${deleteResult.count} clients supprimés.`);

    // 5. Vérifier le résultat
    const countAfter = await prisma.customer.count();
    console.log(`📊 Nombre de clients après nettoyage: ${countAfter}`);

    console.log("🎉 Nettoyage terminé avec succès !");
  } catch (error) {
    console.error("❌ Erreur pendant le nettoyage:", error);
    console.error("Détails:", error.message);
    if (error.meta) {
      console.error("Meta:", error.meta);
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Fonction pour nettoyer avec confirmation
async function cleanupWithConfirmation() {
  const args = process.argv.slice(2);
  const force = args.includes("--force") || args.includes("-f");

  if (!force) {
    console.log(
      "⚠️  ATTENTION: Cette opération va supprimer TOUS les clients de la base de données.",
    );
    console.log("⚠️  Cela supprimera aussi tous les devis et sites liés.");
    console.log("📝 Utilisez --force ou -f pour confirmer le nettoyage.");
    console.log("💡 Exemple: node cleanupCustomers.js --force");
    return;
  }

  await cleanupCustomers();
}

// Exécuter le script
cleanupWithConfirmation();
