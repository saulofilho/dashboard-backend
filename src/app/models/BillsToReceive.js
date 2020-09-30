import Sequelize, { Model } from 'sequelize';

class BillsToReceive extends Model {
  static init(sequelize) {
    super.init(
      {
        invoice_number: Sequelize.DECIMAL,
        amount: Sequelize.DECIMAL,
        due_date: Sequelize.DATE,
        payment: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default BillsToReceive;
