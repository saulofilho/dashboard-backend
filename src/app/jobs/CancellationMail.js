import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMain';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log('Queue online.');

    await Mail.sendMail({
      to: `${appointment.admin.name} <${appointment.admin.email}>`,
      subject: 'Agendamento cancelado.',
      template: 'cancellation',
      context: {
        admin: appointment.admin.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
