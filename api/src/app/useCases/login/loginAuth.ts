import { Request, Response } from 'express';

export function loginAuth(req: Request, res: Response) {
    try {
        const { user, password } = req.query;
        res.json({ user: user, pass: password });

    } catch {
        res.json({ error: 404, message: 'Not found'});
    }
}
