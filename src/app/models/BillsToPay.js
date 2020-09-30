import Sequelize, { Model } from 'sequelize';

class BillsToPay extends Model {
  static init(sequelize) {
    super.init(
      {
        invoice_number: Sequelize.DECIMAL,
        provider_name: Sequelize.STRING,
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

export default BillsToPay;
