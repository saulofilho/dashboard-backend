module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'reminders',
      [
        {
          date: new Date(),
          user_id: 1,
          admin_id: 1,
          canceled_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          date: new Date(),
          user_id: 2,
          admin_id: 2,
          canceled_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('reminders', null, {});
  },
};
