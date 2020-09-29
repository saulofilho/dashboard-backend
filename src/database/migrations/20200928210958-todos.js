module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      todo_title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      todo_text: {
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
    return queryInterface.dropTable('todos');
  },
};
