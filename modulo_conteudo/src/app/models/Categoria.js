export default (sequelize, DataType) => {
	const Categoria = sequelize.define(
		'Categoria',
		{
			nome_categoria: DataType.STRING(32),
			slug: DataType.STRING(255),
			menu: DataType.BOOLEAN,
			nome_menu: DataType.STRING(16),
			ordem_menu: DataType.BOOLEAN,
		},
		{ tableName: 'categoria' }
	);
	return Categoria;
};
