export default (sequelize, DataType) => {
  const ConteudoPagina = sequelize.define(
    'ConteudoPagina',
    {
      titulo: DataType.STRING(100),
      subtitulo: DataType.TEXT,
      conteudo_html: DataType.TEXT,
      ordem: DataType.INTEGER,
      categoria_id: DataType.INTEGER,
      cidade_id: DataType.INTEGER,
      admin_id: DataType.INTEGER,
    },
    { tableName: 'conteudo_pagina' }
  );
  return ConteudoPagina;
};
