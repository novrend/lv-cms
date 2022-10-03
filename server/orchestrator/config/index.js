const baseUrlUsers = "https://p3-services-users.herokuapp.com";
const baseUrlApp = "https://p3-services-app.herokuapp.com";
const Redis = require("ioredis");
const redis = new Redis(
  "redis://default:HkeVOvqi59nDxmw4OxI9XK4JvZfXu9mo@redis-12392.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:12392/0"
);

module.exports = { baseUrlApp, baseUrlUsers, redis };
