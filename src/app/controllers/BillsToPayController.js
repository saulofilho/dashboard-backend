import BillsToPay from '../models/BillsToPay';

class BillsToPayController {
  async index(req, res) {
    const allPay = await BillsToPay.findAll();

    return res.json(allPay);
  }

  async store(req, res) {
    const {
      provider_name,
      invoice_number,
      amount,
      due_date,
      payment,
    } = await BillsToPay.create(req.body);

    return res.json({
      provider_name,
      invoice_number,
      amount,
      due_date,
      payment,
    });
  }

  async update(req, res) {
    const updatePay = await BillsToPay.findByPk(req.params.id);

    await updatePay.update(req.body);

    return res.json(updatePay);
  }

  async delete(req, res) {
    const deleteNow = await BillsToPay.findByPk(req.params.id);

    await deleteNow.destroy();

    return res.json(deleteNow);
  }
}

export default new BillsToPayController();
