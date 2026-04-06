import { addCat, findCatById, listAllCats, updateCat, removeCat } from '../models/cat-model.js';

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  const result = addCat(req.body);
  if (result.cat_id) {
    res.status(201);
    res.json({ message: 'New cat added.', result });
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  const id = Number(req.params.id);
  const updatedCat = updateCat(id, req.body);

  if (!updatedCat) {
    return res.status(404).json({ message: 'Cat not found' });
  }

  res.json(updatedCat);
};

const deleteCat = (req, res) => {
  const id = Number(req.params.id);

  if (!removeCat(id)) {
    return res.status(404).json({ message: 'Cat not found' });
  }

  res.json({ message: 'Cat deleted' });
};

export { getCat, getCatById, postCat, putCat, deleteCat };
