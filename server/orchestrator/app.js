const { ApolloServer } = require("apollo-server");
const appSchema = require("./schema/appSchema");
const usersSchema = require("./schema/usersSchema");

const server = new ApolloServer({
  typeDefs: [appSchema.typeDefs, usersSchema.typeDefs],
  resolvers: [appSchema.resolvers, usersSchema.resolvers],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
