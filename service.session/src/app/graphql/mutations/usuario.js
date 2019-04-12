import { GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';

import SessionController from '../../controllers/SessionController';

export default {
  login: {
    type: GraphQLString,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      senha: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (_, args) => SessionController.login({ ...args }),
  },
  validate: {
    type: GraphQLBoolean,
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (_, { token }) => SessionController.validate(token),
  },
};
