import express from 'express';
import multer from 'multer';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();
const upload = multer({dest: 'uploads/'});

/*
catRouter.route('/').get(getCat).post(postCat);
catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);
*/

catRouter.get('/', getCat);
catRouter.get('/:id', getCatById);
catRouter.post('/', upload.single('cat'), postCat);
catRouter.put('/:id', putCat);
catRouter.delete('/:id', deleteCat);

export default catRouter;
