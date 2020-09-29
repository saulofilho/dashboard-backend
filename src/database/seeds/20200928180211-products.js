module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          product_name: 'bola',
          product_info: 'bola vermelha de borracha',
          product_department: 'esporte',
          product_color: 'vermelho',
          product_material: 'couro',
          product_price: 24.99,
          product_stock: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          product_name: 'relogio',
          product_info: 'rolex dourado',
          product_department: 'vestuario',
          product_color: 'dourado',
          product_material: 'ferro',
          product_price: 3999.99,
          product_stock: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
