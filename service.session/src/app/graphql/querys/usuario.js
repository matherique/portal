import { GraphQLID, GraphQLNonNull } from 'graphql';

import UsuarioType from '../types/usuario';

import UsuarioController from '../../controllers/UsuarioController';

export default {
  usuario: {
    type: UsuarioType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: (_, { id }) => UsuarioController.getOne(id),
  },
};
