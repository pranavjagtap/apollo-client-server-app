const { ApolloServer, gql } = require("apollo-server");

// Here we have defined a type Query, and it has a query greeting which returns string
// As per typeDefs, greeting should return a String thats what is the configured for the greetings.
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => {
      return "Hello GraphQL World!";
    }
  }
};
console.log(typeDefs);
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
