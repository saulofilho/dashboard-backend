import Sequelize, { Model } from 'sequelize';

class CashFlow extends Model {
  static init(sequelize) {
    super.init(
      {
        cash_in: Sequelize.DECIMAL,
        cash_out: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default CashFlow;
