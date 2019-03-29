// const truncate = require('../utils/truncate');
// const { graphqlTest } = require('../utils/graphqltester');

import { graphqlTest } from '../utils/graphqltester';
import truncate from '../utils/truncate';

describe("GraphQL 'Regiao' ", () => {
  beforeEach(async () => {
    await truncate();
  });

  // xit("should return a list of 'Regiao", async () => {
  //   const query = `
  //     query RegioesQuery {
  //       regioes {
  //         id
  //         nome_regiao
  //         uf
  //       }
  //     }
  //   `;
  // });

  it('shoul some', () => {
    expect(true).toBe(true);
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
      id: 1,
      nome_regiao: 'regiao teste',
      uf: 1,
    };
    const registerResponse = await graphqlTest(mutation, regiaoDados);
    // console.log(registerResponse);
    expect(registerResponse).toEqual({
      data: {
        createRegiao: { ...regiaoDados },
      },
    });

    expect(true).toBe(true);
  });
});
