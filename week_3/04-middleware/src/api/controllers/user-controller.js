
import { addUser, findUserById, listAllUsers, updateUser, removeUser } from '../models/user-model.js';

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = (req, res) => {
  const result = addUser(req.body);
  if (result.uid) {
    res.status(201);
    res.json({ message: 'New User added.', result });
  } else {
    res.sendStatus(400);
  }
};

const putUser = (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = updateUser(id, req.body);

  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(updatedUser);
};

const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  if (!removeUser(id)) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'User deleted' });
};

export { getUser, getUserById, postUser, putUser, deleteUser };
