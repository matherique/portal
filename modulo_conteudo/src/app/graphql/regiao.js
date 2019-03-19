import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
} from 'graphql';

import RegiaoController from '../controllers/RegiaoController';
import ResponseType from './response';

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

export const RegiaoMutations = {
	createRegiao: {
		type: RegiaoType,
		args: {
			nome_regiao: { type: new GraphQLNonNull(GraphQLString) },
			uf: { type: new GraphQLNonNull(GraphQLInt) },
		},
		resolve: RegiaoController.create,
	},
	updateRegiao: {
		type: RegiaoType,
		args: {
			id: { type: new GraphQLNonNull(GraphQLID) },
			nome_regiao: { type: GraphQLString },
			uf: { type: GraphQLInt },
		},
		resolve: RegiaoController.update,
	},
	deleteRegiao: {
		type: ResponseType,
		args: {
			id: { type: new GraphQLNonNull(GraphQLID) },
		},
		resolve: RegiaoController.delete,
	},
};
