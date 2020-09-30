import Sequelize, { Model } from 'sequelize';

class Calendar extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        all_day: Sequelize.BOOLEAN,
        start: Sequelize.DATE,
        end: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Calendar;
