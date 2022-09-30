const { gql } = require("apollo-server");
const axios = require("axios");
const { baseUrlApp, baseUrlUsers, redis } = require("../config");

const typeDefs = gql`
  type User {
    
  }
  
  type Query {
    
  }

  type Mutation {

  }
`;

const resolvers = {
  Query: {
    
  },
  Mutation: {
    
  },
};

module.exports = { typeDefs, resolvers };