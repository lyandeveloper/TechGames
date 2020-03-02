import { Router } from 'express';
import PostController from './app/controllers/PostController';
import FileController from './app/controllers/FileController';
import multer from 'multer';
import multerConfig from './config/multer';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/files/:file', FileController.show);

routes.post('/post/new', upload.single('banner'), PostController.store);

export default routes;
