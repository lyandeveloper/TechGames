import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import PostController from './app/controllers/PostController';
import FileController from './app/controllers/FileController';
import FeedController from './app/controllers/FeedController';
import SearchController from './app/controllers/SearchController';
import CategoryController from './app/controllers/CategoryController';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/files/:file', FileController.show);

routes.get('/', FeedController.index);

routes.get('/post/search', SearchController.index);

routes.post('/post/new', upload.single('banner'), PostController.store);
routes.get('/post/:id/:slug', PostController.index);

routes.get('/category/:category', CategoryController.index);

export default routes;
