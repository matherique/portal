export default {
  up: async (queryInterface, Sequelize) => {
    const up = await queryInterface.createTable('tag', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_tag: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      ordem: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      conteudo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    return up;
  },

  down: async (queryInterface, Sequelize) => {
    const down = await queryInterface.dropTable('tag');
    return down;
  },
};
