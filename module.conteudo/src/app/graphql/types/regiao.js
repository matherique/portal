import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const RegiaoType = new GraphQLObjectType({
  name: 'RegiaoType',
  description: '....',
  fields: () => ({
    id: { type: GraphQLInt },
    nome_regiao: { type: GraphQLString },
    uf: { type: GraphQLInt },
  }),
});

export default RegiaoType;
