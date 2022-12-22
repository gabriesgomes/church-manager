import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import { User } from '../../models/User';

export async function createUser(req: Request, res: Response) {
    try {
        const { userName } = req.body;

        if(await User.findOne({ userName })) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;

        const createdUser = await User.create(req.body);

        createdUser.password = '';

        return res.json(createdUser);
    } catch (error) {
        return res.sendStatus(400).json(error);
    }
}
