const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class User {
  static getCollection() {
    const db = getDB();
    return db.collection("users");
  }
  static async find() {
    try {
      const users = await User.getCollection().find();
      return users.toArray();
    } catch (error) {
      throw error;
    }
  }
  static async findOne(id) {
    try {
      const findOne = await User.getCollection().findOne({
        _id: ObjectId(id),
      });
      return findOne;
    } catch (error) {
      throw error;
    }
  }
  static async insertOne(data) {
    try {
      const insertUser = await User.getCollection().insertOne(data);
      return insertUser;
    } catch (error) {
      throw error;
    }
  }
  static async deleteOne(id) {
    try {
      const deleteOne = await User.getCollection().deleteOne({
        _id: ObjectId(id),
      });
      return deleteOne;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
