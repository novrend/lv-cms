const { gql } = require("apollo-server");
const axios = require("axios");
const { baseUrlApp, baseUrlUsers, redis } = require("../config");

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    slug: String
    description: String
    price: Int
    mainImg: String
    User: User
    Images: [Images]
    Category: Category
  }

  type Images {
    id: Int
    productId: Int
    imgUrl: String
  }

  type Category {
    id: ID
    name: String
  }

  input ProductContent {
    name: String!
    description: String!
    price: Int!
    mainImg: String!
    categoryId: Int!
    userMongoId: String!
    image1: String!
    image2: String!
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
    getCategories: [Category]
    getProductsByCategory(name: String!): [Product]
  }

  type Mutation {
    addProduct(content: ProductContent): Product
    editProduct(content: ProductContent, id: ID!): Product
    deleteProduct(id: ID!): Product
  }
`;

const resolvers = {
  Query: {
    getProducts: async () => {
      try {
        const findRedis = await redis.get("products");
        if (findRedis) {
          return JSON.parse(findRedis);
        } else {
          const products = await axios.get(`${baseUrlApp}/product`);
          const users = await axios.get(`${baseUrlUsers}/user`);
          products.data.forEach((product) => {
            users.data.forEach((user) =>
              product.userMongoId === user._id
                ? (product.User = { username: user.username })
                : ""
            );
            delete product.userMongoId;
          });
          return products.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getCategories: async () => {
      try {
        const findRedis = await redis.get(`categories`);
        if (findRedis) {
          return JSON.parse(findRedis);
        } else {
          const categories = await axios.get(`${baseUrlApp}/category`);
          redis.set("categories", JSON.stringify(categories.data));
          return categories.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getProduct: async (_, args) => {
      try {
        const { id } = args;
        const findRedis = await redis.get(`product:${id}`);
        if (findRedis) {
          return JSON.parse(findRedis);
        } else {
          const product = await axios.get(`${baseUrlApp}/product/${id}`);
          const users = await axios.get(`${baseUrlUsers}/user`);

          users.data.forEach((user) =>
            product.data.userMongoId === user._id
              ? (product.data.User = { username: user.username })
              : ""
          );
          delete product.data.userMongoId;
          redis.set(`product:${id}`, JSON.stringify(product.data));
          return product.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getProductsByCategory: async (_, args) => {
      try {
        const { name } = args;
        const products = await axios.get(
          `${baseUrlApp}/category/product?name=${name}`
        );
        const users = await axios.get(`${baseUrlUsers}/user`);
        products.data.forEach((product) => {
          users.data.forEach((user) =>
            product.userMongoId === user._id
              ? (product.User = { username: user.username })
              : ""
          );
          delete product.userMongoId;
        });
        return products.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addProduct: async (_, args) => {
      try {
        const { content } = args;
        const product = await axios.post(`${baseUrlApp}/product`, content);
        redis.del("products");
        return product.data;
      } catch (error) {
        console.log(error);
      }
    },
    editProduct: async (_, args) => {
      try {
        const { id, content } = args;
        const product = await axios.put(
          `${baseUrlApp}/product/${content}`,
          req.body
        );
        redis.del("products");
        redis.del(`product:${id}`);
        return product.data;
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct: async (_, args) => {
      try {
        const { id } = args;
        const product = await axios.delete(`${baseUrlApp}/product/${id}`);
        redis.del("products");
        redis.del(`product:${id}`);
        return product.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
