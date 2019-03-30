import { GraphQLNonNull, GraphQLList, GraphQLID } from 'graphql';

import RegiaoType from '../types/regiao';

import RegiaoController from '../../controllers/RegiaoController';

export default {
  regiao: {
    type: RegiaoType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: (_, { id }) => RegiaoController.getOne(id),
  },
  regioes: {
    type: new GraphQLList(RegiaoType),
    resolve: () => RegiaoController.getAll(),
  },
};
