module.exports = (sequelize, DataTypes) => {
  const CIRelacion = sequelize.define('CIRelacion', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
      primaryKey: true
    },
    ci_origen_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ci_destino_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    tipo_relacion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'ci_relaciones',
    timestamps: false
  });

  return CIRelacion;
};
