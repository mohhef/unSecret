import { authorQueries, authorMutations } from './author';

const resolvers = {
  Query: {
    ...authorQueries,
  },
  Mutation: {
    ...authorMutations,
  },
};

export default resolvers;