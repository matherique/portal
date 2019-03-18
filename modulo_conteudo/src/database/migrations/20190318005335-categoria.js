export default {
	up: async (queryInterface, Sequelize) => {
		const up = await queryInterface.createTable('categoria', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nome_categoria: {
				type: Sequelize.STRING(32),
				allowNull: false,
			},
			slug: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			menu: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
			},
			nome_menu: {
				type: Sequelize.STRING(16),
				allowNull: true,
			},
			ordem_menu: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
			},
		});
		return up;
	},

	down: async (queryInterface, Sequelize) => {
		const down = await queryInterface.dropTable('categoria');
		return down;
	},
};
