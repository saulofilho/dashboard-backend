import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import Reminder from '../models/Reminder';

import Notification from '../schemas/Notification';

import Cache from '../../lib/Cache';

class CreateReminderService {
  async run({ admin_id, user_id, date }) {
    // check if admin_id is a admin
    const checkIsAdmin = await User.findOne({
      where: { id: admin_id, admin: true },
    });

    if (!checkIsAdmin) {
      throw new Error('You can only create remembers with admins.');
    }

    // check for past dates
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not permitted.');
    }

    // check date availability
    const checkAvailability = await Reminder.findOne({
      where: {
        admin_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      throw new Error('Reminder date is not available.');
    }

    const reminders = await Reminder.create({
      user_id,
      admin_id,
      date,
    });

    // notify appointment admin
    const user = await User.findByPk(user_id);
    const formattedDate = format(hourStart, "'dia' dd 'de' MMM', às' H:mm'h'", {
      locale: pt,
    });

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: admin_id,
    });

    /**
     * Invalidate cache
     */
    await Cache.invalidatePrefix(`user:${user.id}:reminders`);

    return reminders;
  }
}

export default new CreateReminderService();
