import { Router } from 'express';

import { loginAuth } from './app/useCases/login/loginAuth';
import { createUser } from './app/useCases/user/createUser';
import { deleteUser } from './app/useCases/user/deleteUser';
import { listUsers } from './app/useCases/user/listUsers';

export const router = Router();

// Valite user
router.post('/auth', loginAuth);

// Create user
router.post('/users', createUser);

// List users
router.get('/users', listUsers);

// Delete user
router.delete('/users/:userId', deleteUser);
