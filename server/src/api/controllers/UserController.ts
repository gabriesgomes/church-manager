import { Request, Response } from 'express'
import * as Yup from 'yup'

import User from '../models/User';
import UserService from '../services/UserService';

class UserController {

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async store(req: Request, res: Response) {
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

      const userExists = await UserService.findUser(email, userName)

      if (userExists) {
        return res.status(409).json({ error: 'User already exists' })
      }

      const newUser = new User({ name, email, userName, password })
      const user = await UserService.createUsers(newUser);
      return res.status(202).json(user);

    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const userId = req.params;
      await UserService.deleteUser(userId);
      res.status(202);
    } catch (error) {
      res.json(error);
    }
  }

}

export default new UserController()