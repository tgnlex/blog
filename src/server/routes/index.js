import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index')
})

router.get('/blog', (req, res) => {
  res.render('pages/blog')
})

router.get('/blog/:id', async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`http://localhost:4000/api/posts/${id}`);
  const post = await response.json();
  res.render('pages/post', {post: post});
})

export default router;
