import Sequelize, { Model } from 'sequelize';

class Todo extends Model {
  static init(sequelize) {
    super.init(
      {
        todo_title: Sequelize.STRING,
        todo_text: Sequelize.STRING,
        todo_done: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Todo;
