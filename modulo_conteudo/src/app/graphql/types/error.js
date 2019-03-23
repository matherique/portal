import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'ErrorType',
  description: '....',
  fields: () => ({
    message: { type: GraphQLString },
  }),
});
