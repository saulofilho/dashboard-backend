import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const allProduct = await Product.findAll();

    return res.json(allProduct);
  }

  async store(req, res) {
    const {
      product_name,
      product_info,
      product_department,
      product_color,
      product_material,
      product_price,
      product_stock,
    } = await Product.create(req.body);

    return res.json({
      product_name,
      product_info,
      product_department,
      product_color,
      product_material,
      product_price,
      product_stock,
    });
  }

  async update(req, res) {
    const updateProduct = await Product.findByPk(req.params.id);

    await updateProduct.update(req.body);

    return res.json(updateProduct);
  }

  async delete(req, res) {
    const deletProduct = await Product.findByPk(req.params.id);

    await deletProduct.destroy();

    return res.json(deletProduct);
  }
}

export default new ProductController();
