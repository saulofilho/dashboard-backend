import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import User from '../models/User';
import Reminder from '../models/Reminder';

class ScheduleController {
  async index(req, res) {
    const checkUserAdmin = await User.findOne({
      where: { id: req.userId, admin: true },
    });

    if (!checkUserAdmin) {
      return res.status(401).json({ error: 'User is not a admin.' });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);

    const reminders = await Reminder.findAll({
      where: {
        admin_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          atributes: ['name'],
        },
      ],
      order: ['date'],
    });

    return res.json(reminders);
  }
}

export default new ScheduleController();
