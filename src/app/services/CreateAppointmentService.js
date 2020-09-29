import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import Appointment from '../models/Appointment';

import Notification from '../schemas/Notification';

import Cache from '../../lib/Cache';

class CreateAppointmentService {
  async run({ admin_id, user_id, date }) {
    // check if admin_id is a admin
    const checkIsAdmin = await User.findOne({
      where: { id: admin_id, admin: true },
    });

    if (!checkIsAdmin) {
      throw new Error('You can only create appointments with admins.');
    }

    // check for past dates
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not permitted.');
    }

    // check date availability
    const checkAvailability = await Appointment.findOne({
      where: {
        admin_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      throw new Error('Appointment date is not available.');
    }

    const appointment = await Appointment.create({
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
    await Cache.invalidatePrefix(`user:${user.id}:appointments`);

    return appointment;
  }
}

export default new CreateAppointmentService();
