const UserController = require("../controllers/UserController");
const router = require("express").Router();

router.get("/user", UserController.find);
router.get("/user/:id", UserController.findOne);
router.post("/user", UserController.insertOne);
router.delete("/user/:id", UserController.deleteOne);

module.exports = router;
