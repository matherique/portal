export default {
  up: async (queryInterface, Sequelize) => {
    const up = await queryInterface.createTable('conteudo_pagina', {
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
      subtitulo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      conteudo_html: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ordem: {
        type: Sequelize.INTEGER,
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
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });

    return up;
  },
  down: async (queryInterface, Sequelize) => {
    const down = await queryInterface.dropTable('conteudo_pagina');
    return down;
  },
};
