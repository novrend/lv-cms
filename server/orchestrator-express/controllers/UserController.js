const { baseUrlUsers, redis } = require("../config");
const axios = require("axios");

class UserController {
  static async getUsers(req, res) {
    try {
      const findRedis = await redis.get("users");
      if (findRedis) {
        res.status(200).json(JSON.parse(findRedis));
      } else {
        const users = await axios.get(`${baseUrlUsers}/user`);
        redis.set("users", JSON.stringify(users.data));
        res.status(users.status).json(users.data);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async findUser(req, res) {
    try {
      const findRedis = await redis.get(`user:${req.params.id}`);
      if (findRedis) {
        res.status(200).json(JSON.parse(findRedis));
      } else {
        const user = await axios.get(`${baseUrlUsers}/user/${req.params.id}`);
        redis.set(`user:${req.params.id}`, JSON.stringify(user.data));
        res.status(user.status).json(user.data);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async newUser(req, res) {
    try {
      const user = await axios.post(`${baseUrlUsers}/user`, req.body);
      redis.del("users");
      res.status(user.status).json(user.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await axios.delete(`${baseUrlUsers}/user/${req.params.id}`);
      redis.del("users");
      res.status(user.status).json(user.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
