export default {
  up: async (queryInterface, Sequelize) => {
    const up = await queryInterface.createTable('cidade', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      regiao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    return up;
  },

  down: async (queryInterface, Sequelize) => {
    const down = await queryInterface.dropTable('cidade');
    return down;
  },
};
