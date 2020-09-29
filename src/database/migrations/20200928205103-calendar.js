module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('calendar', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      allDay: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
      start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('calendar');
  },
};
