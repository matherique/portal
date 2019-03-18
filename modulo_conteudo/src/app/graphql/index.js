import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { RegiaoSchema } from './regiao';

const Query = new GraphQLObjectType({
	name: 'QueryType',
	description: '....',
	fields: () => ({ ...RegiaoSchema }),
});

// const Mutation = new GraphQLObjectType({
// 	name: 'MutationType',
// 	description: '....',
// 	fields: () => ({}),
// });

export default new GraphQLSchema({ query: Query });
