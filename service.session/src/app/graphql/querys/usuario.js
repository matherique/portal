import { GraphQLString, GraphQLNonNull } from 'graphql';

import UsuarioType from '../types/usuario';

import SessionController from '../../controllers/SessionController';

export default {
  me: {
    type: UsuarioType,
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (_, { token }) => SessionController.getUserByToken(token),
  },
};
