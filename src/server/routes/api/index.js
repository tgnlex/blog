import { Router } from 'express';
import postsRouter from './posts.js';

const api = Router();

api.use('/posts', postsRouter);

export default api;
