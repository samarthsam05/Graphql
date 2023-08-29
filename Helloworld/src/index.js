const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    Name: String!
   
    
  }
`;

const resolvers = {
  Query: {
    Name: () => "The name is samarth",
  
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));