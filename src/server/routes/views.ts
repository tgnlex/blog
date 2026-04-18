import { Router } from 'express';
import posts, {type Post } from '../data/posts.ts';
import { read } from '../utils/file.ts';
const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index.html')
});

router.get('/blog', (req, res) => {
  res.render('pages/blog.html')
});

router.get('/blog/:id', (req, res) => {
  const post: Post | undefined = posts[Number(req.params.id)];
  if (post) {
    const markdown = read(`md/${post.md}`);
    res.render('pages/post.html', {title: post.title, markdown: markdown})
  }
});

export default router;
