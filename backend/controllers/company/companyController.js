const companyService = require("../../services/company/companyService");
const authService = require("../../services/auth/authService");

const checkSiret = async (req, res) => {
  const { siret } = req.query;

  if (!siret) {
    return res.status(400).json({ error: "SIRET manquant" });
  }

  const cleanSiret = siret.replace(/\s/g, "");

  if (cleanSiret.length !== 14) {
    return res
      .status(400)
      .json({ error: "Le SIRET doit contenir 14 chiffres" });
  }

  try {
    const result = await companyService.checkSiret(cleanSiret);

    if (!result) {
      return res
        .status(404)
        .json({ error: "Aucune entreprise trouvée avec ce SIRET" });
    }

    if (result.exists) {
      return res.json({
        exists: true,
        ...result.company,
      });
    } else {
      return res.json(result.company);
    }
  } catch (error) {
    console.error("SIRET Check Error:", error);
    return res.status(500).json({
      error: error.message || "Impossible de vérifier le SIRET pour le moment",
    });
  }
};

const saveCompany = async (req, res) => {
  try {
    const { companyName, siret, email } = req.body;

    // Validation basique
    if (!companyName || !siret || !email) {
      return res
        .status(400)
        .json({ error: "Champs obligatoires manquants (Nom, SIRET, Email)" });
    }

    const company = await companyService.saveCompany(req.body);

    // Refresh token to include the new companyId
    const token = authService.generateToken({
      user: "admin",
      role: "admin",
      company_id: company.id,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 8 * 60 * 60 * 1000,
    });

    res.json({ success: true, company });
  } catch (error) {
    console.error("Save Company Error:", error);
    if (error.message === "Cette société est déjà enregistrée.") {
      return res.status(409).json({ error: error.message });
    }
    res
      .status(500)
      .json({ error: "Erreur lors de la sauvegarde de la société" });
  }
};

const getCompany = async (req, res) => {
  try {
    const company = await companyService.getCompany();

    if (!company) {
      return res.json({ exists: false });
    }

    return res.json({
      exists: true,
      company,
    });
  } catch (error) {
    console.error("Get Company Error:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la société" });
  }
};

module.exports = {
  checkSiret,
  saveCompany,
  getCompany,
};
