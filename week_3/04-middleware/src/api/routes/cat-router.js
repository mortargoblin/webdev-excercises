import express from 'express';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

/*
catRouter.route('/').get(getCat).post(postCat);
catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);
*/

catRouter.get('/', getCat);
catRouter.get('/:id', getCatById);
catRouter.post('/', postCat);
catRouter.put('/:id', putCat);
catRouter.delete('/:id', deleteCat);

export default catRouter;
