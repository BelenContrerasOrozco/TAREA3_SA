const express = require('express');
const app = express();
const db = require('./config/database');
const relacionesRoutes = require('./routes/ci_relacion.routes');

// Middlewares
app.use(express.json());

// Rutas
const ciRoutes = require('./routes/ci.routes');
app.use('/api/cis', ciRoutes);
app.use('/api/relaciones', relacionesRoutes);

// Verificar conexión DB
db.authenticate()
  .then(() => console.log('Conectada a base de datos'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = app;
