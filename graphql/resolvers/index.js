import { authorQueries, authorMutations, authorFields  } from './author';
import { bookQueries, bookFields } from './book';

import { Author } from '../../db/models'
const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
  },
  Mutation: {
    ...authorMutations,
  },
  ...authorFields,
  ...bookFields,
};

export default resolvers;