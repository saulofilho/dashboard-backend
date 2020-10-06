import Reminder from '../models/Reminder';
import User from '../models/User';
import File from '../models/File';

import CreateReminderService from '../services/CreateReminderService';
import CancelReminderService from '../services/CancelReminderService';

import Cache from '../../lib/Cache';

class ReminderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const cacheKey = `user:${req.userId}:reminders:${page}`;
    const cached = await Cache.get(cacheKey);

    if (cached) {
      return res.json(cached);
    }

    const reminders = await Reminder.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date', 'past', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'admin',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    await Cache.set(cacheKey, reminders);

    return res.json(reminders);
  }

  async store(req, res) {
    const { admin_id, date } = req.body;

    const reminder = await CreateReminderService.run({
      admin_id,
      user_id: req.userId,
      date,
    });

    return res.json(reminder);
  }

  async delete(req, res) {
    const reminder = await CancelReminderService.run({
      admin_id: req.params.id,
      user_id: req.userId,
    });

    return res.json(reminder);
  }
}

export default new ReminderController();
