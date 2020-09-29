import User from '../models/User';
import File from '../models/File';

import Cache from '../../lib/Cache';

class AdminController {
  async index(req, res) {
    const cached = await Cache.get('admins');

    if (cached) {
      return res.json(cached);
    }

    const admins = await User.findAll({
      where: { admin: true },
      attributes: ['id', 'name', 'avatar_id', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    await Cache.set('admins', admins);

    return res.json(admins);
  }
}

export default new AdminController();
