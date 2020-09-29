module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('bills-to-receive', {
      bills_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clients', key: 'client_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('bills-to-receive');
  },
};
