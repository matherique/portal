export default (sequelize, DataType) => {
	const Banner = sequelize.define(
		'Banner',
		{
			url: DataType.STRING(128),
			nome: DataType.STRING(64),
			data: DataType.DATE,
			views: DataType.INTEGER,
			categoria_id: DataType.INTEGER,
			cliente_id: DataType.INTEGER,
		},
		{ tableName: 'banner' }
	);

	return Banner;
};
