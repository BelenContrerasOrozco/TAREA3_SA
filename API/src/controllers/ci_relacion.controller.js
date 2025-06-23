const relacionService = require('../services/ci_relacion.service');

exports.getAll = async (req, res) => {
  const relaciones = await relacionService.getAllRelaciones();
  res.json(relaciones);
};

exports.getById = async (req, res) => {
  const relacion = await relacionService.getRelacionById(req.params.id);
  if (!relacion) return res.status(404).json({ mensaje: 'Relación no encontrada' });
  res.json(relacion);
};

exports.create = async (req, res) => {
  try {
    const nueva = await relacionService.createRelacion(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const resultado = await relacionService.updateRelacion(req.params.id, req.body);
  res.json({ mensaje: 'Relación actualizada', resultado });
};

exports.delete = async (req, res) => {
  await relacionService.deleteRelacion(req.params.id);
  res.json({ mensaje: 'Relación eliminada' });
};
