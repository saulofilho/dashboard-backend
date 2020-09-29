module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'bills-to-pay',
      [
        {
          provider_name: 'rodolfo fornecedor',
          invoice_number: 1312312312,
          amount: 25.99,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          provider_name: 'saulo representacoes',
          invoice_number: 123123112,
          amount: 9.99,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bills-to-pay', null, {});
  },
};
