import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';

import SessionController from '../../controllers/SessionController';
import UsuarioType from '../types/usuario';

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
  createUsuario: {
    type: UsuarioType,
    args: {
      id: { type: GraphQLID },
      nome: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      usuario: { type: new GraphQLNonNull(GraphQLString) },
      senha: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (_, args) => SessionController.create({ ...args }),
  },
};
