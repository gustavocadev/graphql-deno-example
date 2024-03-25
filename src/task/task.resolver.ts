export const resolverTask = {
  Query: {
    tasks: () => {
      return [];
    },
  },
  Mutation: {
    createTask: (parent, args) => {
      return {
        id: '1',
        title: args.title,
        description: args.description,
      };
    },
  },
};
