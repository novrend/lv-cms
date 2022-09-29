const { Category, Product, Image } = require("../models");

class categoryController {
  static async fetchCategories(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async getProductByCategory(req, res, next) {
    try {
      const { name } = req.query;
      const category = await Category.findOne({
        where: {
          name,
        },
        include: {
          model: Product,
          include: {
            model: Image,
          },
        },
      });
      if (!category) {
        throw { code: 404, msg: "Category not found" };
      }
      res.status(200).json(category.Products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = categoryController;
