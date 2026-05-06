import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index')
})

router.get('/blog', (req, res) => {
  res.render('pages/blog')
})

export default router;
