module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('clients', 'avatarClients_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('clients', 'avatarClients_id');
  },
};
