module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      product_info: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      product_department: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      product_color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      product_material: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      product_price: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      product_stock: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('products');
  },
};
