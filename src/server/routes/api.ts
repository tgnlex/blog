import { Router } from 'express';
import posts from '../data/posts.ts';

const router = Router();

router.get('/posts', (req, res) => {
  res.json(posts);
})


export default router;
