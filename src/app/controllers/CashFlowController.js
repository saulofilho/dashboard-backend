import CashFlow from '../models/CashFlow';

class CashFlowController {
  async index(req, res) {
    const allCashFlow = await CashFlow.findAll();

    return res.json(allCashFlow);
  }

  async store(req, res) {
    const { cash_in, cash_out } = await CashFlow.create(req.body);

    return res.json({
      cash_in,
      cash_out,
    });
  }

  async update(req, res) {
    const updateCashFlow = await CashFlow.findByPk(req.params.id);

    await updateCashFlow.update(req.body);

    return res.json(updateCashFlow);
  }

  async delete(req, res) {
    const deletCashFlow = await CashFlow.findByPk(req.params.id);

    await deletCashFlow.destroy();

    return res.json(deletCashFlow);
  }
}

export default new CashFlowController();
