module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'todos',
      [
        {
          todo_title: 'pagar contas',
          todo_text: 'pagar despesas referentes a renovacao de contrato',
          todo_done: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_title: 'comprar!',
          todo_text: 'temos que comprar coisas novas para a empresa',
          todo_done: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_title: 'fazer',
          todo_text:
            'temos que comprar coisas novas para a empresa temos que comprar coisas novas para a empresa',
          todo_done: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('todos', null, {});
  },
};
