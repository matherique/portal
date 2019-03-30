export default (sequelize, DataType) => {
  const Conteudo = sequelize.define(
    'Conteudo',
    {
      titulo: DataType.STRING(100),
      video: DataType.STRING(128),
      author: DataType.STRING(128),
      publicado: DataType.STRING(100),
      subtitulo: DataType.STRING(128),
      resumo: DataType.TEXT,
      slug: DataType.TEXT('tiny'),
      ordem: DataType.INTEGER,
      views: DataType.INTEGER,
      destaque: DataType.BOOLEAN,
      conteudo: DataType.TEXT,
      informacao_cliente: DataType.TEXT,
      banner_home: DataType.BOOLEAN,
      categoria_id: DataType.INTEGER,
      cidade_id: DataType.INTEGER,
    },
    { tableName: 'conteudo' }
  );
  return Conteudo;
};
