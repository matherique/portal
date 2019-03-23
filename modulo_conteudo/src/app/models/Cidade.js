export default (sequelize, DataType) => {
  const Cidade = sequelize.define(
    'Cidade',
    {
      cidade: DataType.STRING(64),
      regiao_id: DataType.INTEGER,
    },
    { tableName: 'cidade' }
  );
  return Cidade;
};
