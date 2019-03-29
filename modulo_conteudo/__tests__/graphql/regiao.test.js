// const truncate = require('../utils/truncate');
// const { graphqlTest } = require('../utils/graphqltester');

import { graphqlTest } from '../utils/graphqltester';
import { truncate, singTestDatabase } from '../utils/truncate';

describe("GraphQL 'Regiao' ", () => {
  beforeAll(async () => {
    await singTestDatabase();
  });
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

  it("should return a list of 'Regiao", async () => {
    const query = `
      query RegioesQuery {
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
        regioes: [{ ...regiaoDados }],
      },
    });
  });

  it("should create a 'Regiao' and return a created data ", async () => {
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
        createRegiao: { ...regiaoDados },
      },
    });
  });
});
