// mock data
let catItems = [
  {
    cat_id: 2,
    cat_name: 'Frank',
    weight: 11,
    owner: 3609,
    birthdate: '2021-10-12',
  },
  {
    cat_id: 1,
    cat_name: 'Mittens',
    weight: 8,
    owner: 3602,
    birthdate: '2021-10-12',
  },
];

const listAllCats = () => {
  return catItems;
};

const findCatById = (id) => {
  return catItems.find((item) => item.cat_id == id);
};

const addCat = (cat) => {
  const { cat_name, weight, owner, birthdate } = cat;
  const newId = catItems[0].cat_id + 1;
  catItems.unshift({
    cat_id: newId,
    cat_name,
    weight,
    owner,
    birthdate,
  });
  return { cat_id: newId };
};

const updateCat = (id, updatedData) => {
  const index = catItems.findIndex(c => c.cat_id === id);

  if (index === -1) return null;

  catItems[index] = { ...catItems[index], ...updatedData };
  return catItems[index];
};

const removeCat = (id) => {
  const index = catItems.findIndex(c => c.cat_id === id);

  if (index === -1) return false;

  catItems.splice(index, 1); return true;
};

export { listAllCats, findCatById, addCat, updateCat, removeCat };
