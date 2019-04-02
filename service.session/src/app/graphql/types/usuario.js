import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'UsuarioType',
  description: '....',
  fields: () => ({
    id: { type: GraphQLInt },
    nome: { type: GraphQLString },
    email: { type: GraphQLString },
    usuario: { type: GraphQLString },
    senha: { type: GraphQLString },
  }),
});
