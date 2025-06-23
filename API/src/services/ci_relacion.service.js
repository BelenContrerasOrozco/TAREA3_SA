const { CIRelacion } = require('../models');

const getAllRelaciones = async () => {
  return await CIRelacion.findAll();
};

const getRelacionById = async (id) => {
  return await CIRelacion.findByPk(id);
};

const createRelacion = async (data) => {
  return await CIRelacion.create(data);
};

const updateRelacion = async (id, data) => {
  return await CIRelacion.update(data, { where: { id } });
};

const deleteRelacion = async (id) => {
  return await CIRelacion.destroy({ where: { id } });
};

module.exports = {
  getAllRelaciones,
  getRelacionById,
  createRelacion,
  updateRelacion,
  deleteRelacion
};
