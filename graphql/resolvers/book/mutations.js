import { Author, WorksAt } from '../../../db/models'

const authorMutations = {
  createAuthor: async (_, { author }) => {
    const newAuthor = new Author(author);
  },
  updateAuthor: async (_, { id, author }) => {
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      {
        $set: { ...author }
      },
      { new: true }
    );
    return updatedAuthor;
  },

  addAuthorToPublisher: async (_, { id, publisher }) => {
    const author = await Author.findById(id);

    if (author) {
      const newWorksAt = new WorksAt({ publisher, author: id });
      await newWorksAt.save();
    }

    return Author;
  },
};

export default authorMutations;