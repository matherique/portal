import { GraphQLObjectType, GraphQLBoolean, GraphQLNonNull } from 'graphql';

import ErrorType from './error';

export default new GraphQLObjectType({
	name: 'ResponseType',
	description: '....',
	fields: () => ({
		ok: { type: new GraphQLNonNull(GraphQLBoolean) },
		error: {
			type: ErrorType,
			default: null,
		},
	}),
});
