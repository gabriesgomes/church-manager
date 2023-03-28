import { Router } from 'express';
import SessionController from '../api/controllers/SessionController';
import UserController from '../api/controllers/UserController';

const router = Router();

// Valited User
router.post('/auth', SessionController.store);

// User
router.post('/users', UserController.createUser);
router.get('/users', UserController.listUsers);
router.delete('/users/:userId', UserController.deleteUser);

export default router