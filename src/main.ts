import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolverTask } from './task/task.resolver.ts';
import { resolverUser } from './user/user.resolver.ts';
import { Task } from './task/entities/task.entity.ts';

// my express app
const app = express();

const typeDefs = await Deno.readTextFile('./src/schema.graphql');

export interface MyContext {
  dataSources: {
    tasks: Task[];
  };
}

// my apollo server
const apolloServer = new ApolloServer<MyContext>({
  typeDefs,
  resolvers: [resolverTask, resolverUser],
});

await apolloServer.start();
apolloServer.applyMiddleware({ app });

const port = parseInt(Deno.env.get('PORT')!) || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
