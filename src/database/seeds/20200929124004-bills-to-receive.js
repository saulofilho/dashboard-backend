module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'bills-to-receive',
      [
        {
          invoice_number: 332233,
          amount: 1.99,
          payment: 'visa',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          invoice_number: 222,
          amount: 9,
          payment: 'master card',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bills-to-receive', null, {});
  },
};
