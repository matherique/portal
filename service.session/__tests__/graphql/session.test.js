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

  it("should return a list of 'Regiao'", async () => {
    const query = `
      query RegioesQuery{
        regioes {
          id
          nome_regiao
          uf
        }
      }
    `;
    const regiaoDados = {
      id: 1,
      nome_regiao: 'regiao teste',
      uf: 1,
    };
    const registerResponse = await graphqlTest(query, regiaoDados);

    expect(registerResponse).toMatchObject({
      dados: {
        regioes: [regiaoDados],
      },
    });
  });

  it("should return one 'Regiao' with valid id", async () => {
    const query = `
      query RegioesQuery($id: ID!) {
        regiao(id: $id) {
          id
          nome_regiao
          uf
        }
      }
    `;
    const regiaoDados = {
      id: 1,
      nome_regiao: 'regiao teste',
      uf: 1,
    };
    const { dados } = await graphqlTest(query, regiaoDados);

    expect(dados).toMatchObject({
      regiao: regiaoDados,
    });
  });

  it('should return null with invalid id', async () => {
    const query = `
      query RegioesQuery($id: ID!) {
        regiao(id: $id) {
          id
          nome_regiao
          uf
        }
      }
    `;
    const regiaoDados = {
      id: 2,
    };
    const { dados } = await graphqlTest(query, regiaoDados);

    expect(dados).toMatchObject({
      regiao: null,
    });
  });

  it("should create a 'Regiao'", async () => {
    const mutation = `
      mutation createRegiao($id: ID! $nome_regiao: String!, $uf: Int!) {
        createRegiao(id: $id, nome_regiao: $nome_regiao, uf: $uf) {
          id
          nome_regiao
          uf
        }   
      }
    `;
    const regiaoDados = {
      id: 2,
      nome_regiao: 'regiao teste',
      uf: 1,
    };
    const { dados } = await graphqlTest(mutation, regiaoDados);

    expect(dados).toMatchObject({
      createRegiao: regiaoDados,
    });
  });

  it("should update a 'Regiao' and return response ok true", async () => {
    const mutation = `
      mutation updateRegiao($id: ID! $nome_regiao: String!, $uf: Int!) {
        updateRegiao(id: $id, nome_regiao: $nome_regiao, uf: $uf) {
          ok
          error {
            message
          }
        }   
      }
    `;
    const regiaoDados = {
      id: 1,
      nome_regiao: 'regiao teste 2',
      uf: 2,
    };
    const { dados } = await graphqlTest(mutation, regiaoDados);

    expect(dados).toMatchObject({
      updateRegiao: {
        ok: true,
        error: null,
      },
    });
  });

  it("should update a 'Regiao' and return response ok false", async () => {
    const mutation = `
      mutation updateRegiao($id: ID! $nome_regiao: String!, $uf: Int!) {
        updateRegiao(id: $id, nome_regiao: $nome_regiao, uf: $uf) {
          ok
        }   
      }
    `;
    const regiaoDados = {
      id: 1,
      nome_regiao: 'regiao teste',
      uf: 1,
    };
    const { dados } = await graphqlTest(mutation, regiaoDados);

    expect(dados).toMatchObject({
      updateRegiao: {
        ok: false,
      },
    });
  });

  it("should delete a 'Regiao' and return response ok true", async () => {
    const mutation = `
      mutation deleteRegiao($id: ID!) {
        deleteRegiao(id: $id) {
          ok
          error { 
            message
          }
        }   
      }
    `;
    const regiaoDados = { id: 1 };
    const { dados } = await graphqlTest(mutation, regiaoDados);

    expect(dados).toMatchObject({
      deleteRegiao: {
        ok: true,
        error: null,
      },
    });
  });

  it("should not delete a 'Regiao' if id is invalid", async () => {
    const mutation = `
      mutation deleteRegiao($id: ID!) {
        deleteRegiao(id: $id) {
          ok
        }   
      }
    `;
    const regiaoDados = { id: 2 };
    const { dados } = await graphqlTest(mutation, regiaoDados);

    expect(dados).toMatchObject({
      deleteRegiao: {
        ok: false,
      },
    });
  });
});
