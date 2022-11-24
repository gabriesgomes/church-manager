import { Request, Response } from 'express';
import { Login } from '../../models/Login';

export async function deleteUser(req: Request, res: Response) {
    try {
        const userId = req.params;

        const deletedUser = await Login.deleteOne(userId);

        res.json(deletedUser);
    } catch (error) {
        res.json(error);
    }
}
