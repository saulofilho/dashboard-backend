import Sequelize, { Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        client_name: Sequelize.STRING,
        client_last_name: Sequelize.STRING,
        client_email: Sequelize.STRING,
        client_telephone: Sequelize.DECIMAL,
        client_cellphone: Sequelize.DECIMAL,
        client_address: Sequelize.TEXT,
        client_city: Sequelize.STRING,
        client_uf: Sequelize.STRING,
        client_company_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Client;
