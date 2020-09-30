module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('cash_flows', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cash_in: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      cash_out: {
        type: Sequelize.DECIMAL,
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
    return queryInterface.dropTable('cahs_flows');
  },
};
