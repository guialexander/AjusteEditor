import { Router } from 'express';

import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserHandler,
  updateUserHandler,
} from './user.controller';

const router = Router();

// /api/users -> GET
router.get('/', getAllUserHandler);

// /api/users -> POST
router.post('/', createUserHandler);

// /api/users/:id -> GET
router.get('/:id', getUserHandler);

// /api/users/:id -> DELETE
router.delete('/:id', deleteUserHandler);

// /api/users/:id -> PATCH
router.patch('/:id', updateUserHandler);

export default router;
