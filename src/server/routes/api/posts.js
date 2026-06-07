import { Router } from 'express';

const posts = [
  {id: 1, title: "Post one", description: "The first post", body: "Hello World!"},
  {id: 2, title: "Post two", description: "The second post", body: "This is the second post..."},
  {id: 3, title: "Post three", description: "The third post", body: "This is the third post..."},
]


const router = Router();

router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts[id - 1];
  res.json(post);
})


export default router;
