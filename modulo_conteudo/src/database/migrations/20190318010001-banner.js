export default {
  up: async (queryInterface, Sequelize) => {
    const up = await queryInterface.createTable('banner', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      views: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    return up;
  },

  down: async (queryInterface, Sequelize) => {
    const down = await queryInterface.dropTable('banner');
    return down;
  },
};
