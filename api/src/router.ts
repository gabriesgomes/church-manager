import { Router } from 'express';

import { loginAuth } from './app/useCases/login/loginAuth';

export const router = Router();

// Valida login
router.get('/login', loginAuth);
