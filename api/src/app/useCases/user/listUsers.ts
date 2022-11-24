import { Request, Response } from 'express';
import { Login } from '../../models/Login';

export async function listUsers(req: Request, res: Response) {
    try {
        const users = await Login.find();

        res.json(users);
    } catch (error) {

        res.status(500).json(error);
    }
}
