const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const ConfigurationItem = require('.')(sequelize, Sequelize.DataTypes);
const CIRelacion = require('./ci_relacion.model')(sequelize, Sequelize.DataTypes);
const CICambio = require('./ci_cambio.model')(sequelize, Sequelize.DataTypes);

// Relaciones
ConfigurationItem.hasMany(CICambio, { foreignKey: 'ci_id' });
CICambio.belongsTo(ConfigurationItem, { foreignKey: 'ci_id' });

ConfigurationItem.hasMany(CIRelacion, { foreignKey: 'ci_origen_id', as: 'relacionesOrigen' });
ConfigurationItem.hasMany(CIRelacion, { foreignKey: 'ci_destino_id', as: 'relacionesDestino' });

module.exports = {
  sequelize,
  ConfigurationItem,
  CIRelacion,
  CICambio
};
