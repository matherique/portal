export default {
	up: async (queryInterface, Sequelize) => {
		const up = await queryInterface.createTable('regiao', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nome_regiao: {
				type: Sequelize.STRING(64),
				allowNull: false,
			},
			uf: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		});
		return up;
	},

	down: async (queryInterface, Sequelize) => {
		const down = await queryInterface.dropTable('regiao');
		return down;
	},
};
