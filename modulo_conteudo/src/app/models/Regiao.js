export default (sequelize, DataType) => {
	const Regiao = sequelize.define(
		'Regiao',
		{
			nome_regiao: DataType.STRING(64),
			uf: DataType.INTEGER,
		},
		{ tableName: 'regiao' }
	);
	return Regiao;
};
