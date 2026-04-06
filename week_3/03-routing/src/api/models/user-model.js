let userItems = [
  {
    uid: 2,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password'
  },
  {
    uid: 1,
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@metropolia.fi',
    role: 'user',
    password: 'password'
  }
];

const listAllUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((item) => item.uid == id);
};

const addUser = (user) => {
  const { name, uname, email, role, password } = user;
  const newId = userItems[0].uid + 1;
  userItems.unshift({
    uid: newId,
    name,
    uname,
    email,
    role,
    password
  });
  return { uid: newId };
};

const updateUser = (id, updatedData) => {
  const index = userItems.findIndex(c => c.uid === id);

  if (index === -1) return null;

  userItems[index] = { ...userItems[index], ...updatedData };
  return userItems[index];
};

const removeUser = (id) => {
  const index = userItems.findIndex(c => c.uid === id);

  if (index === -1) return false;

  userItems.splice(index, 1);
  return true;
};

export { listAllUsers, findUserById, addUser, updateUser, removeUser };
