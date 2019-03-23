import { GraphQLID, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

import RegiaoController from '../../controllers/RegiaoController';
import ResponseType from '../types/response';
import RegiaoType from '../types/regiao';

export default {
  createRegiao: {
    type: RegiaoType,
    args: {
      nome_regiao: { type: new GraphQLNonNull(GraphQLString) },
      uf: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: RegiaoController.create,
  },
  updateRegiao: {
    type: RegiaoType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      nome_regiao: { type: GraphQLString },
      uf: { type: GraphQLInt },
    },
    resolve: RegiaoController.update,
  },
  deleteRegiao: {
    type: ResponseType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: RegiaoController.delete,
  },
};
