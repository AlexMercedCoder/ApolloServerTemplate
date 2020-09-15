const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./typedefs/typedefs");
const resolvers = require("./resolvers/resolvers");
const context = require("./configs/context");
const serverOptions = require("./configs/serverOptions");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, context });

// The `listen` method launches a web server.
server.listen(serverOptions).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
