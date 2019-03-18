import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull,
	GraphQLList,
} from 'graphql';
import { Regiao } from '../models';

const RegiaoType = new GraphQLObjectType({
	name: 'RegiaoType',
	description: '....',
	fields: () => ({
		id: { type: GraphQLID },
		nome_regiao: { type: GraphQLString },
		uf: { type: GraphQLInt },
	}),
});

const RegiaoSchema = {
	regiao: {
		type: RegiaoType,
		args: { id: { type: new GraphQLNonNull(GraphQLID) } },
		resolve: async (_, args) => {
			const regiao = await Regiao.findOne({ id: args.id });
			return regiao;
		},
	},
	regioes: {
		type: new GraphQLList(RegiaoType),
		resolve: async () => {
			const regiao = await Regiao.findAll();
			return regiao;
		},
	},
};

export { RegiaoType, RegiaoSchema };
