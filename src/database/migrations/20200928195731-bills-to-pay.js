module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('bills_to_pays', {
      id: {
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
      due_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      payment: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('bills_to_pays');
  },
};
