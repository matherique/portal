export default (sequelize, DataType) => {
	const Tag = sequelize.define(
		'Tag',
		{
			nome_tag: DataType.STRING(32),
			ordem: DataType.INTEGER,
			conteudo_id: DataType.INTEGER,
		},
		{ tableName: 'tag' }
	);
	return Tag;
};
