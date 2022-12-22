import { Request, Response } from 'express';
import { User } from '../../models/User';

export async function listUsers(req: Request, res: Response) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {

        res.status(500).json(error);
    }
}
