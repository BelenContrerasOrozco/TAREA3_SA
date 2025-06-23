const { ConfigurationItem } = require('../models');

const getAllCIs = async () => {
  return await ConfigurationItem.findAll();
};

const getCIById = async (id) => {
  return await ConfigurationItem.findByPk(id);
};

const createCI = async (data) => {
  return await ConfigurationItem.create(data);
};

const updateCI = async (id, data) => {
  return await ConfigurationItem.update(data, {
    where: { id }
  });
};

const deleteCI = async (id) => {
  return await ConfigurationItem.destroy({
    where: { id }
  });
};

module.exports = {
  getAllCIs,
  getCIById,
  createCI,
  updateCI,
  deleteCI
};
