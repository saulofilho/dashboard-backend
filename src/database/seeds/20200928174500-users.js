module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John',
          last_name: 'Doe',
          email: 'test@medium.com',
          address: 'Rua Lauro Linhares, 123',
          telephone: '1112345678',
          cellphone: '1112345678',
          social: '@facebook.com/john',
          company: 'Nike',
          password_hash: '9ff7b641722c30acdc058f2499d97dd8',
          admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rodolfo',
          last_name: 'Oliveira',
          email: 'rodolfo@gmail.com',
          address: 'Rua Teste, 123',
          telephone: '1112345678',
          cellphone: '1112345678',
          social: '@twiiter.com/john',
          company: 'Google',
          password_hash: '9ff7b641722c30acdc058f2499d97dd8',
          admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
