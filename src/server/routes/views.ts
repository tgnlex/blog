import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index.html')
});

router.get('/blog', (req, res) => {
  res.render('pages/blog.html')
});

export default router;
