const FisheryAction = require("../../actions");

const getAllFishery = async (req, res, next) => {
  try {
    const action = new FisheryAction();

    const project = await action.getAll();

    const result = {
      message: "Successfully get all fishery data",
      data: project,
    };

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getAllFisheryByFilter = async (req, res, next) => {
  const {
    commodity,
    area,
    town,
    province,
    size,
    startPrice,
    endPrice,
    startDate,
    endDate,
  } = req.query;

  try {
    const action = new FisheryAction();

    const project = await action.getAllByFilter({
      commodity,
      area,
      town,
      province,
      size,
      startPrice,
      endPrice,
      startDate,
      endDate,
    });

    const result = {
      message: "Successfully get all fishery data by filter",
      data: project,
    };

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getFisheryById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const action = new FisheryAction();

    const project = await action.getById(id);

    const result = {
      message: "Successfully get fishery data by id",
      data: project,
    };

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const action = new FisheryAction();

    const project = await action.getAllCategories();

    const result = {
      message: "Successfully get all commodities",
      data: project,
    };

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getStatistics = async (req, res, next) => {
  try {
    const action = new FisheryAction();

    const project = await action.getAllStatistics();

    const result = {
      message: "Successfully get all statistics",
      data: project,
    };

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const createFishery = async (req, res, next) => {
  const { commodity, province, town, size, price } = req.body;

  try {
    const action = new FisheryAction();
    await action.add({
      commodity,
      province,
      town,
      size,
      price,
    });

    const result = {
      message: "Successfully create fishery data",
    };

    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const updateFishery = async (req, res, next) => {
  const { commodity, province, town, size, price } = req.body;
  const id = req.params.id;

  try {
    const action = new FisheryAction();

    await action.updateById({
      commodity,
      province,
      town,
      size,
      price,
      id,
    });

    const result = {
      message: "Successfully update fishery data by id",
    };

    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const deleteFishery = async (req, res, next) => {
  const id = req.params.id;

  try {
    const action = new FisheryAction();

    await action.deleteById(id);

    const result = {
      message: "Successfully delete fishery data by id",
    };

    res.status(204).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllFishery,
  getAllFisheryByFilter,
  getFisheryById,
  getCategories,
  getStatistics,
  createFishery,
  updateFishery,
  deleteFishery,
};
