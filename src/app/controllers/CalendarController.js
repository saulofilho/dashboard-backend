import Calendar from '../models/Calendar';

class CalendarController {
  async index(req, res) {
    const allCalendar = await Calendar.findAll();

    return res.json(allCalendar);
  }

  async store(req, res) {
    const { title, all_day, start, end } = await Calendar.create(req.body);

    return res.json({ title, all_day, start, end });
  }

  async update(req, res) {
    const updateCalendar = await Calendar.findByPk(req.params.id);

    await updateCalendar.update(req.body);

    return res.json(updateCalendar);
  }

  async delete(req, res) {
    const deletCalendar = await Calendar.findByPk(req.params.id);

    await deletCalendar.destroy();

    return res.json(deletCalendar);
  }
}

export default new CalendarController();
