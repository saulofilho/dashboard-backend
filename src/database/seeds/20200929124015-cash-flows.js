module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'cash_flows',
      [
        {
          cash_in: 50.99,
          cash_out: 20.34,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          cash_in: 19,
          cash_out: 20,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cash_flows', null, {});
  },
};
