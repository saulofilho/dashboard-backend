module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('bills-to-pay', {
      bills_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      provider_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      invoice_number: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'product_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('bills-to-pay');
  },
};
