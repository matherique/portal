import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql';

import UsuarioController from '../../controllers/UsuarioController';
import ResponseType from '../types/response';
import UsuarioType from '../types/usuario';

export default {
  createUsuario: {
    type: UsuarioType,
    args: {
      id: { type: GraphQLID },
      nome: { type:  new GraphQLNonNull(GraphQLString)},
      email: { type:  new GraphQLNonNull(GraphQLString)},
      usuario: { type:  new GraphQLNonNull(GraphQLString)},
      senha: { type:  new GraphQLNonNull(GraphQLString)},
    }, 
    resolve: (_, args) => UsuarioController.create({ ...args }),
  } 
}
 