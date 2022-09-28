const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:admin@cluster0.yljueam.mongodb.net/test";
const client = new MongoClient(uri);
let database = null;

async function mongodb() {
  try {
    database = client.db("sample");
  } catch (error) {
    throw error;
  }
}

function getDB() {
  return database;
}

module.exports = { mongodb, getDB };
