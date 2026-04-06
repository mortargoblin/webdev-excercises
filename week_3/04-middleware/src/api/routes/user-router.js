import express from 'express';
import {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';

const userRouter = express.Router();
userRouter.get('/', getUser);

userRouter.get('/:id', getUserById);
userRouter.post('/', postUser);
userRouter.put('/:id', putUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
