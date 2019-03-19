import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { RegiaoQuery, RegiaoMutations } from './regiao';

const Query = new GraphQLObjectType({
	name: 'QueryType',
	description: '....',
	fields: () => ({ ...RegiaoQuery }),
});

const Mutation = new GraphQLObjectType({
	name: 'MutationType',
	description: '....',
	fields: () => ({ ...RegiaoMutations }),
});

export default new GraphQLSchema({ query: Query, mutation: Mutation });
