const siteService = require("../../services/site/siteService");

const getAllSites = async (req, res, next) => {
  try {
    const sites = await siteService.getAllSites(req.user.company_id);
    res.json(sites);
  } catch (error) {
    next(error);
  }
};

const getSitesByCustomer = async (req, res, next) => {
  try {
    const sites = await siteService.getSitesByCustomerId(
      req.params.customerId,
      req.user.company_id,
    );
    res.json(sites);
  } catch (error) {
    next(error);
  }
};

const getSiteById = async (req, res, next) => {
  try {
    const site = await siteService.getSiteById(
      req.params.id,
      req.user.company_id,
    );
    res.json(site);
  } catch (error) {
    next(error);
  }
};

const createSite = async (req, res, next) => {
  try {
    const siteData = {
      ...req.body,
      company_id: req.user.company_id,
    };
    const site = await siteService.createSite(siteData);
    res.status(201).json(site);
  } catch (error) {
    next(error);
  }
};

const updateSite = async (req, res, next) => {
  try {
    const site = await siteService.updateSite(
      req.params.id,
      req.user.company_id,
      req.body,
    );
    res.json(site);
  } catch (error) {
    next(error);
  }
};

const deleteSite = async (req, res, next) => {
  try {
    await siteService.deleteSite(req.params.id, req.user.company_id);
    res.json({ message: "Site supprimé avec succès" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSites,
  getSitesByCustomer,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
};
