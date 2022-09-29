const router = require("express").Router();
const UserController = require('../controllers/UserController');

router.get("/", UserController.getUsers);
router.get("/:id", UserController.findUser);
router.post("/", UserController.newUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
