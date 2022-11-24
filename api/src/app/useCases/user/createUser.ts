import { Request, Response } from 'express';

import { Login } from '../../models/Login';

export async function createUser(req: Request, res: Response) {
    try {
        const { user, password } = req.body;

        const createdUser = await Login.create({ user, password });

        res.json(createdUser);
    } catch (error) {
        res.sendStatus(500).json(error);
    }
}
