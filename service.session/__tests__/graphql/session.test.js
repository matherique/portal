import { graphqlTest } from '../utils/graphqltester';
import { truncate } from '../utils/database';

describe('Session Test', () => {
  beforeEach(async () => {
    await truncate();
    const mutation = `
      mutation CreateUsuario($id: ID, $nome: String!, email: String!, usuario: String!, Senha: !String ) {
        createUsuario(id: $id, nome: $nome, email: $email, usuario: $usuario, senha: $senha) {
          id
          nome
          email
          usuario
          senha 
        }
      }
    `;
    const dados = {
      id: 1,
      nome: 'Usuario Teste',
    };

    await graphqlTest(mutation, dados);
  });
});
