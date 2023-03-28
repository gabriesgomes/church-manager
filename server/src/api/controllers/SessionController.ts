import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

class SessionController {
  async store(req: Request, res: Response) {
    console.log('session')
  }

}

export default new SessionController()





import User from '../models/User';
// import { authConfig } from '../../config/auth';

// function generateToken(params = {}) {
//     return jwt.sign(params, authConfig.secret, {
//         expiresIn: 86400,
//     } );
// }

//export async function loginAuth(req: Request, res: Response) {
  // try {
  //   const { userName, password } = req.body;
  //   console.log(userName, password);
  //   const user = await User.findOne({ userName }).select('+password');

  //   if (!user) {
  //     return res.status(400).json({ error: 'User not found' });
  //   }

  //   if (!await bcrypt.compare(password, user!.password)) {
  //     return res.status(400).json({ error: 'Invalid password' });
  //   }

  //   return res.json({
  //     user
  //   });
  // } catch {
  //   return res.json({ error: 404, message: 'Authentication failed' });
  // }
//}
