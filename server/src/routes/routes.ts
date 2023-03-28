import { Router } from 'express';
import SessionController from '../api/controllers/SessionController';
import UserController from '../api/controllers/UserController';

const router = Router();

// Valited User
router.post('/auth', SessionController.store);

// User
router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.store);
router.delete('/users/:userId', UserController.destroy);

export default router