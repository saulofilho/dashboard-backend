import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Client from '../app/models/Client';
import Product from '../app/models/Product';
import CashFlow from '../app/models/CashFlow';
import BillsToPay from '../app/models/BillsToPay';
import BillsToReceive from '../app/models/BillsToReceive';
import Calendar from '../app/models/Calendar';
import Todo from '../app/models/Todo';
import Reminder from '../app/models/Reminder';
import databaseConfig from '../config/database';

const models = [
  User,
  File,
  Reminder,
  Client,
  Product,
  CashFlow,
  BillsToPay,
  BillsToReceive,
  Calendar,
  Todo,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
