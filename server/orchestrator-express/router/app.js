const router = require("express").Router();
const AppController = require('../controllers/AppController');

router.get("/product", AppController.getProducts);
router.get("/product/:id", AppController.findProduct);
router.post("/product", AppController.addProduct);
router.put("/product/:id", AppController.editProduct);
router.delete("/product/:id", AppController.editProduct);

router.get("/category", AppController.getCategories);
router.get("/category/product", AppController.getProductsByCategory);

module.exports = router;
