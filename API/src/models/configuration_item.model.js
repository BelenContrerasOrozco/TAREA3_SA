module.exports = (sequelize, DataTypes) => {
  const ConfigurationItem = sequelize.define('ConfigurationItem', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descripcion: DataTypes.TEXT,
    numero_serie: DataTypes.TEXT,
    version: DataTypes.TEXT,
    fecha_adquisicion: DataTypes.DATE,
    estado_actual: DataTypes.TEXT,
    ubicacion_fisica: DataTypes.TEXT,
    propietario_responsable: DataTypes.TEXT,
    ambiente: DataTypes.TEXT,
    niveles_seguridad: DataTypes.TEXT,
    cumplimiento: DataTypes.TEXT,
    estado_configuracion: DataTypes.TEXT,
    numero_licencia: DataTypes.TEXT,
    fecha_vencimiento: DataTypes.DATE,
    creado_en: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    actualizado_en: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'configuration_items',
    timestamps: false
  });

  return ConfigurationItem;
};
