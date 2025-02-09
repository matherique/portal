export default {
  up: async (queryInterface, Sequelize) => {
    const up = await queryInterface.createTable('conteudo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      video: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
      author: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      publicado: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      subtitulo: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      resumo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      slug: {
        type: Sequelize.TEXT('tiny'),
        allowNull: false,
      },
      ordem: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      views: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      destaque: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      conteudo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      informacao_cliente: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      banner_home: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    return up;
  },
  down: async (queryInterface, Sequelize) => {
    const down = await queryInterface.dropTable('conteudo');
    return down;
  },
};
