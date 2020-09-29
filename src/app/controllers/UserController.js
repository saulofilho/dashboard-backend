import User from '../models/User';
import File from '../models/File';

import Cache from '../../lib/Cache';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const {
      id,
      name,
      email,
      admin,
      address,
      telephone,
      cellphone,
      social,
      company,
    } = await User.create(req.body);

    if (admin) {
      await Cache.invalidate('admins');
    }

    return res.json({
      id,
      name,
      email,
      address,
      telephone,
      cellphone,
      social,
      company,
      admin,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    await user.update(req.body);

    const {
      id,
      name,
      address,
      telephone,
      cellphone,
      social,
      company,
      admin,
      avatar,
    } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      address,
      telephone,
      cellphone,
      social,
      company,
      admin,
      avatar,
    });
  }
}

export default new UserController();
