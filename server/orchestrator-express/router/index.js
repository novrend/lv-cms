const router = require("express").Router();
const user = require("./user");
const app = require("./app");

router.use("/user", user);
router.use("/app", app);

module.exports = router;
