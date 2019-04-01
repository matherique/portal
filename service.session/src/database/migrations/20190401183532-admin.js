export default {
  async up(queryInterface, Sequelize) {
    const up = await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      usuario: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
    });

    return up;
  },

  async down(queryInterface, Sequelize) {
    const down = await queryInterface.dropTable('usuario');

    return down;
  },
};
