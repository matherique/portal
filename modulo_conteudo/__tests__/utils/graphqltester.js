import { graphql } from 'graphql';
import schema from '../../src/app/graphql';

export const graphqlTestMutation = async (query, data, context = null) => {
  const result = await graphql(schema, query, undefined, context, data);
  return result;
};

export const graphqlTestQuery = async (query, context = null) => {
  const result = await graphql(schema, query, undefined, context, undefined);
  return result;
};
