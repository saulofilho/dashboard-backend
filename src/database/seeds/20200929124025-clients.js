module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'clients',
      [
        {
          client_name: 'Rodolfo',
          client_last_name: 'Teixeira',
          client_email: 'xxxtest@medium.com',
          client_telephone: '6512345678',
          client_cellphone: '6599830293',
          client_address: 'Rua Santo Irineu, 307',
          client_city: 'Cuiaba',
          client_uf: 'MT',
          client_company_name: 'Supreme',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          client_name: 'Saulo',
          client_last_name: 'Filho',
          client_email: 'tesxxxxt@medium.com',
          client_telephone: '22222',
          client_cellphone: '31231231231231',
          client_address: 'Rua Santo Irineu, 307, sadasdasdada adw ad a a',
          client_city: 'dasad awdaw da',
          client_uf: 'MT',
          client_company_name: 'Nike Adidas Puma',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('clients', null, {});
  },
};
