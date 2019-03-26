import { GraphQLID, GraphQLInt, GraphQLString, GraphQLNonNull } from 'graphql';

import RegiaoController from '../../controllers/RegiaoController';
import ResponseType from '../types/response';
import RegiaoType from '../types/regiao';

export default {
  createRegiao: {
    type: RegiaoType,
    args: {
      id: { type: GraphQLID },
      nome_regiao: { type: new GraphQLNonNull(GraphQLString) },
      uf: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: (_, args) => RegiaoController.create({ ...args }),
  },
  updateRegiao: {
    type: ResponseType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      nome_regiao: { type: GraphQLString },
      uf: { type: GraphQLInt },
    },
    resolve: (_, args) => RegiaoController.update({ ...args }),
  },
  deleteRegiao: {
    type: ResponseType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: (_, { id }) => RegiaoController.delete(id),
  },
};
