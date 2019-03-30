export default (sequelize, DataType) => {
  const Visita = sequelize.define(
    'Visita',
    {
      ip: DataType.STRING(32),
      hora: DataType.DATE,
      categoria_id: DataType.INTEGER,
    },
    { tableName: 'visita' }
  );
  return Visita;
};
