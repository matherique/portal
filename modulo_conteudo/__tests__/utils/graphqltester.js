import { graphql } from 'graphql';
import schema from '../../src/app/graphql';

export const graphqlTest = async (query, data, context = null) => {
  const result = await graphql(schema, query, undefined, context, data);
  return result;
};
