import { graphqlTest } from '../utils/graphqltester';
import { truncate, singTestDatabase } from '../utils/database';

describe("GraphQL 'Regiao' ", () => {
  beforeEach(async () => {
    await truncate();
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
      id: 1,
      nome_regiao: 'regiao teste',
      uf: 1,
    };

    await graphqlTest(mutation, regiaoDados);
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

    expect(registerResponse).toEqual({
      data: {
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
    const registerResponse = await graphqlTest(query, regiaoDados);

    expect(registerResponse).toEqual({
      data: {
        regiao: regiaoDados,
      },
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
    const registerResponse = await graphqlTest(query, regiaoDados);

    expect(registerResponse).toEqual({
      data: {
        regiao: null,
      },
    });
  });

  it("should create a 'Regiao' and return a created data", async () => {
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
    const registerResponse = await graphqlTest(mutation, regiaoDados);

    expect(registerResponse).toEqual({
      data: {
        createRegiao: regiaoDados,
      },
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
    const registerResponse = await graphqlTest(mutation, regiaoDados);

    expect(registerResponse).toEqual({
      data: {
        updateRegiao: {
          ok: true,
          error: null,
        },
      },
    });
  });

  it("should update a 'Regiao' and return response ok false and a message", async () => {
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
      nome_regiao: 'regiao teste',
      uf: 1,
    };
    const registerResponse = await graphqlTest(mutation, regiaoDados);

    expect(registerResponse).toEqual({
      data: {
        updateRegiao: {
          ok: false,
          error: {
            message: `Cannot update regiao with id ${regiaoDados.id}`,
          },
        },
      },
    });
  });
});
