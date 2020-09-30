module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'bills_to_receives',
      [
        {
          invoice_number: 332233,
          amount: 1.99,
          due_date: new Date(),
          payment: 'visa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          invoice_number: 222,
          amount: 9.99,
          due_date: new Date(),
          payment: 'master card',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bills_to_receives', null, {});
  },
};
