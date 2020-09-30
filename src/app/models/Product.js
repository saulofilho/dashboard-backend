import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        product_name: Sequelize.STRING,
        product_info: Sequelize.STRING,
        product_department: Sequelize.STRING,
        product_color: Sequelize.STRING,
        product_material: Sequelize.STRING,
        product_price: Sequelize.DECIMAL,
        product_stock: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Product;
