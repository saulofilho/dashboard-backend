import BillsToReceive from '../models/BillsToReceive';

class BillsToReceiveController {
  async index(req, res) {
    const allTodo = await BillsToReceive.findAll();

    return res.json(allTodo);
  }

  async store(req, res) {
    const {
      due_date,
      invoice_number,
      amount,
      payment,
    } = await BillsToReceive.create(req.body);

    return res.json({ due_date, invoice_number, amount, payment });
  }

  async update(req, res) {
    const updateTodo = await BillsToReceive.findByPk(req.params.id);

    await updateTodo.update(req.body);

    return res.json(updateTodo);
  }

  async delete(req, res) {
    const deleteNow = await BillsToReceive.findByPk(req.params.id);

    await deleteNow.destroy();

    return res.json(deleteNow);
  }
}

export default new BillsToReceiveController();
