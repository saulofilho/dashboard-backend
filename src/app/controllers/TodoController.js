import Todo from '../models/Todo';

class TodoController {
  async index(req, res) {
    const allTodo = await Todo.findAll();

    return res.json(allTodo);
  }

  async store(req, res) {
    const { todo_title, todo_text, todo_done } = await Todo.create(req.body);

    return res.json({ todo_title, todo_text, todo_done });
  }

  async update(req, res) {
    const updateTodo = await Todo.findByPk(req.params.id);

    await updateTodo.update(req.body);

    return res.json(updateTodo);
  }

  async delete(req, res) {
    const deleteNow = await Todo.findByPk(req.params.id);

    await deleteNow.destroy();

    return res.json(deleteNow);
  }
}

export default new TodoController();
