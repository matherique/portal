#!/bin/bash
nomearquivo="$1.js"
nome=$1

cat <<EOF > src/app/graphql/types/$nomearquivo
import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

const ${nome^}Type = new GraphQLObjectType({
  name: '${nome^}Type',
  description: '....',
  fields: () => ({
    id: { type: GraphQLID },
   }),
});

export default ${nome^}Type;
EOF

echo "$1 type file created"

# criando arquivo de query
cat <<EOF > src/app/graphql/querys/$nomearquivo
import {} from 'graphql';

import ${nome^}Type from '../types/$nome';

import ${nome^}Controller from '../../controllers/${nome^}Controller';

export default {
	$nome: {

	}
};
EOF

echo "$1 query file created"

# criando arquivo de mutations
cat <<EOF > src/app/graphql/mutations/$nomearquivo
import { } from 'graphql';

import ${nome^}Controller from '../../controllers/${nome^}Controller';
import ResponseType from '../types/response';
import ${nome^}Type from '../types/${nome}';

export default {

}
EOF

echo "$1 mutation file created"

# criando arquivo de controller
cat <<EOF > src/app/controllers/${nome^}Controller.js
import { ${nome^} } from '../models';

class ${nome^}Controller {

}
EOF


echo "$1 controller file created"
