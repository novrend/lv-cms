const { ApolloServer } = require("apollo-server");
const appSchema = require("./schema/appSchema");
const usersSchema = require("./schema/usersSchema");

const server = new ApolloServer({
  typeDefs: [appSchema.typeDefs, usersSchema.typeDefs],
  resolvers: [appSchema.resolvers, usersSchema.resolvers],
  introspection: true,
  playground: true,
});

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
});