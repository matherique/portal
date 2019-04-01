import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import Querys from './querys';
import Mutations from './mutations';

const query = new GraphQLObjectType({
  name: 'query',
  description: '....',
  fields: () => Querys,
});

const mutation = new GraphQLObjectType({
  name: 'mutation',
  description: '....',
  fields: () => Mutations,
});

export default new GraphQLSchema({ query, mutation });
