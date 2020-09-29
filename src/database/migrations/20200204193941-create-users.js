module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telephone: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      cellphone: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      social: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
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

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
