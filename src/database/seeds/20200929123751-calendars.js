module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'calendars',
      [
        {
          title: 'reuniao',
          all_day: false,
          start: new Date(),
          end: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Talk com clientes de LA.',
          all_day: true,
          start: new Date(),
          end: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Showtime.',
          all_day: true,
          start: new Date(),
          end: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('calendars', null, {});
  },
};
