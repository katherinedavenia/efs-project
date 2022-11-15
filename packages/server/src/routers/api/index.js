const { Router } = require("express");
const {
  getAllFishery,
  createFishery,
  getFisheryById,
  updateFishery,
  deleteFishery,
  getAllFisheryByFilter,
  getCategories,
  getStatistics,
} = require("./controllers");

const fisheryRouter = Router();

fisheryRouter.get("/fishery", getAllFishery);
fisheryRouter.get("/fishery/filter", getAllFisheryByFilter);
fisheryRouter.get("/fishery/categories", getCategories);
fisheryRouter.get("/fishery/statistics", getStatistics);
fisheryRouter.get("/fishery/:id", getFisheryById);
fisheryRouter.post("/fishery", createFishery);
fisheryRouter.put("/fishery/:id", updateFishery);
fisheryRouter.delete("/fishery/:id", deleteFishery);

module.exports = fisheryRouter;
