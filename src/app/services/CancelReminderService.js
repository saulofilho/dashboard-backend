import { isBefore, subHours } from 'date-fns';

import User from '../models/User';
import Reminder from '../models/Reminder';

import Queue from '../../lib/Queue';
import Cache from '../../lib/Cache';

import CancellationMail from '../jobs/CancellationMail';

class CancelReminderService {
  async run({ admin_id, user_id }) {
    const reminder = await Reminder.findByPk(admin_id, {
      include: [
        {
          model: User,
          as: 'admin',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    if (reminder.user_id !== user_id) {
      throw new Error('You dont have permission to cancel this appointment.');
    }

    const dateWithSub = subHours(reminder.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      throw new Error('You can only cancel appointments 2 hours in advance.');
    }

    reminder.canceled_at = new Date().toJSON();

    await reminder.save();

    await Queue.add(CancellationMail.key, {
      reminder,
    });

    /**
     * Invalidate cache
     */
    await Cache.invalidatePrefix(`user:${user_id}:reminders`);

    return reminder;
  }
}

export default new CancelReminderService();
