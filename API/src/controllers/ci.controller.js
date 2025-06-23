exports.create = async (req, res) => {
  const data = req.body;

  // Validaciones generales
  if (!data.nombre || !data.tipo) {
    return res.status(400).json({ error: 'Nombre y tipo son campos obligatorios.' });
  }

  // Validaciones específicas según tipo de CI
  const tipo = data.tipo.toLowerCase();

  const errores = [];

  if (tipo === 'hardware') {
    if (!data.numero_serie) errores.push('El número de serie es obligatorio para Hardware.');
    if (!data.ubicacion_fisica) errores.push('La ubicación física es obligatoria para Hardware.');
  }

  if (tipo === 'software') {
    if (!data.version) errores.push('La versión es obligatoria para Software.');
    if (!data.numero_licencia) errores.push('El número de licencia es obligatorio para Software.');
  }

  if (tipo === 'base de datos' || tipo === 'basedatos') {
    if (!data.version) errores.push('La versión es obligatoria para Base de Datos.');
    if (!data.propietario_responsable) errores.push('El propietario es obligatorio para Base de Datos.');
  }

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const nuevoCI = await ciService.createCI(data);
    res.status(201).json(nuevoCI);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
