const { baseUrlApp, baseUrlUsers, redis } = require("../config");
const axios = require("axios");

class AppController {
  static async getProducts(req, res) {
    try {
      const findRedis = await redis.get("products");
      if (findRedis) {
        res.status(200).json(JSON.parse(findRedis));
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
        redis.set("products", JSON.stringify(products.data));
        res.status(products.status).json(products.data);
      }
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }

  static async findProduct(req, res) {
    try {
      const findRedis = await redis.get(`product:${req.params.id}`);
      if (findRedis) {
        res.status(200).json(JSON.parse(findRedis));
      } else {
        const product = await axios.get(
          `${baseUrlApp}/product/${req.params.id}`
        );
        const users = await axios.get(`${baseUrlUsers}/user`);

        users.data.forEach((user) =>
          product.data.userMongoId === user._id
            ? (product.data.User = { username: user.username })
            : ""
        );
        delete product.data.userMongoId;
        redis.set(`product:${req.params.id}`, JSON.stringify(product.data));
        res.status(product.status).json(product.data);
      }
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }

  static async addProduct(req, res) {
    try {
      const product = await axios.post(`${baseUrlApp}/product`, req.body);
      redis.del("products");
      res.status(product.status).json(product.data);
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }

  static async editProduct(req, res) {
    try {
      const product = await axios.put(
        `${baseUrlApp}/product/${req.params.id}`,
        req.body
      );
      redis.del("products");
      redis.del(`product:${req.params.id}`);
      res.status(product.status).json(product.data);
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const product = await axios.delete(
        `${baseUrlApp}/product/${req.params.id}`
      );
      redis.del("products");
      redis.del(`product:${req.params.id}`);
      res.status(product.status).json(product.data);
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }

  static async getCategories(req, res) {
    try {
      const findRedis = await redis.get(`categories`);
      if (findRedis) {
        res.status(200).json(JSON.parse(findRedis));
      } else {
        const categories = await axios.get(`${baseUrlApp}/category`);
        redis.set("categories", JSON.stringify(categories.data));
        res.status(categories.status).json(categories.data);
      }
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }

  static async getProductsByCategory(req, res) {
    try {
      const products = await axios.get(
        `${baseUrlApp}/category/product?name=${req.query.name}`
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
      res.status(products.status).json(products.data);
    } catch (error) {
      res.status(error.reponse.status).json(error.reponse.data);
    }
  }
}

module.exports = AppController;
