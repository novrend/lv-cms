const baseUrlUsers = "http://localhost:4001";
const baseUrlApp = "http://localhost:4002";
const Redis = require("ioredis");
const redis = new Redis(
  "redis://default:HkeVOvqi59nDxmw4OxI9XK4JvZfXu9mo@redis-12392.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:12392/0"
);

module.exports = { baseUrlApp, baseUrlUsers, redis };
