const router = require("express").Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const error = require("../middleware/error");

router.get("/product", productController.fetchProducts);
router.get("/product/:id", productController.getProduct);
router.post("/product", productController.addProduct);
router.put("/product/:id", productController.editProduct);
router.delete("/product/:id", productController.deleteProduct);

router.get("/category", categoryController.fetchCategories);
router.get("/category/product", categoryController.getProductByCategory);

router.use(error);

module.exports = router;
