const { gql } = require("apollo-server");
const axios = require("axios");
const { baseUrlUsers, redis } = require("../config");

const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    role: String
    phoneNumber: String
    address: String
  }

  input UserContent {
    username: String
    email: String
    password: String
    phoneNumber: String
    address: String
  }

  type Query {
    getUsers: [User]
    findUser(id: ID!): User
  }

  type Mutation {
    newUser(content: UserContent): User
    deleteUser(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const findRedis = await redis.get("users");
        if (findRedis) {
          return JSON.parse(findRedis);
        } else {
          const users = await axios.get(`${baseUrlUsers}/user`);
          redis.set("users", JSON.stringify(users.data));
          return users.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    findUser: async (_, args) => {
      try {
        const findRedis = await redis.get(`user:${args.id}`);
        if (findRedis) {
          return JSON.parse(findRedis);
        } else {
          const user = await axios.get(`${baseUrlUsers}/user/${args.id}`);
          redis.set(`user:${args.id}`, JSON.stringify(user.data));
          return user.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    newUser: async (_, args) => {
      try {
        const user = await axios.post(`${baseUrlUsers}/user`, args.content);
        redis.del("users");
        return user.data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (_, args) => {
      try {
        const user = await axios.delete(`${baseUrlUsers}/user/${args.id}`);
        redis.del("users");
        redis.del(`user:${args.id}`);
        return user.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
