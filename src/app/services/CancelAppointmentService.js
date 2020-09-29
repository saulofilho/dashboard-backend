import { isBefore, subHours } from 'date-fns';

import User from '../models/User';
import Appointment from '../models/Appointment';

import Queue from '../../lib/Queue';
import Cache from '../../lib/Cache';

import CancellationMail from '../jobs/CancellationMail';

class CancelAppointmentService {
  async run({ admin_id, user_id }) {
    const appointment = await Appointment.findByPk(admin_id, {
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

    if (appointment.user_id !== user_id) {
      throw new Error('You dont have permission to cancel this appointment.');
    }

    const dateWithSub = subHours(appointment.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      throw new Error('You can only cancel appointments 2 hours in advance.');
    }

    appointment.canceled_at = new Date().toJSON();

    await appointment.save();

    await Queue.add(CancellationMail.key, {
      appointment,
    });

    /**
     * Invalidate cache
     */
    await Cache.invalidatePrefix(`user:${user_id}:appointments`);

    return appointment;
  }
}

export default new CancelAppointmentService();
