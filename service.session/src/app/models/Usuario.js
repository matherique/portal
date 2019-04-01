export default (sequelize, DataType) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      nome: DataType.STRING(100),
      email: DataType.STRING(150),
      usuario: DataType.STRING(16),
      senha: DataType.STRING(16),
    },
    { tableName: 'usuario' }
  );
  return Usuario;
};
