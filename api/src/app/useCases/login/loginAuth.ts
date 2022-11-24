import { Request, Response } from 'express';
import { Login } from '../../models/Login';

export async function loginAuth(req: Request, res: Response) {
    try {
        const { user, password } = req.query;

        if(!user && !password) {
            return res.status(500).json({ message: 'Invalid data' });
        }

        const validatedUser = Login.findOne({ user: user, password: password});

        res.json(validatedUser);

    } catch {
        res.json({ error: 404, message: 'Not found'});
    }
}
