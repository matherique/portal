export default {
  up: async (queryInterface, Sequelize) => {
    const up = await queryInterface.createTable('visita', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ip: {
        type: Sequelize.STRING(32),
        allowNull: true,
      },
      hora: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    return up;
  },

  down: async (queryInterface, Sequelize) => {
    const down = await queryInterface.dropTable('visita');
    return down;
  },
};
