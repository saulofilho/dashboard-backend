module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'calendar',
      [
        {
          title: 'reuniao',
          allDay: false,
          start: new Date(),
          end: new Date(),
        },
        {
          title: 'Talk com clientes de LA.',
          allDay: true,
          start: new Date(),
          end: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('calendar', null, {});
  },
};
