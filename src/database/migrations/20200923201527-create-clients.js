module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      client_last_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      client_telephone: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      client_cellphone: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      client_address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      client_city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client_uf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client_company_name: {
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
    return queryInterface.dropTable('clients');
  },
};
