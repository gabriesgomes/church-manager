import { Request, Response } from 'express';
import { User } from '../../models/User';

export async function deleteUser(req: Request, res: Response) {
    try {
        const userId = req.params;

        const deletedUser = await User.deleteOne(userId);

        res.json(deletedUser);
    } catch (error) {
        res.json(error);
    }
}
