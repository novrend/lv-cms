const User = require("../models/User");
class UserController {
  static async find(req, res) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async findOne(req, res) {
    try {
      const users = await User.findOne(req.params.id);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async insertOne(req, res) {
    try {
      await User.insertOne(req.body);
      res.status(200).json(req.body);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteOne(req, res) {
    try {
      await User.deleteOne(req.params.id);
      res.status(200).json({ msg: "User deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
