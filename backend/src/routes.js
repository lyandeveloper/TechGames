import { Router } from 'express';
import PostController from './app/controllers/PostController';
import FileController from './app/controllers/FileController';
import FeedController from './app/controllers/FeedController';
import multer from 'multer';
import multerConfig from './config/multer';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/files/:file', FileController.show);

routes.get('/', FeedController.index);

routes.post('/post/new', upload.single('banner'), PostController.store);
routes.get('/post/:id/:slug', PostController.index);

export default routes;
