import { Request, Response } from 'express'
import * as Yup from 'yup'

import User from '../models/User';

class UserController {

  async listUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {

      res.status(500).json(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        userName: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      })

      try {
        schema.validateSync(req.body, { abortEarly: false })
      } catch (err: any) {
        return res.status(400).json({ error: err.errors })
      }

      const { name, email, userName, password } = req.body;

      const userExists = await User.findOne({ email, userName })

      if (userExists) {
        return res.status(409).json({ error: 'User already exists' })
      }

      const user = new User({ name, email, userName, password })
      await user.save()
      return res.status(202).json(user);

    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = req.params;

      const deletedUser = await User.deleteOne(userId);

      res.json(deletedUser);
    } catch (error) {
      res.json(error);
    }
  }

}

export default new UserController()