import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
} from 'graphql';

import RegiaoController from '../../controllers/RegiaoController';

export const RegiaoType = new GraphQLObjectType({
	name: 'RegiaoType',
	description: '....',
	fields: () => ({
		id: { type: GraphQLID },
		nome_regiao: { type: GraphQLString },
		uf: { type: GraphQLInt },
	}),
});

export const RegiaoQuery = {
	regiao: {
		type: RegiaoType,
		args: { id: { type: new GraphQLNonNull(GraphQLID) } },
		resolve: RegiaoController.getOne,
	},
	regioes: {
		type: new GraphQLList(RegiaoType),
		resolve: RegiaoController.getAll,
	},
};

export default RegiaoQuery;
