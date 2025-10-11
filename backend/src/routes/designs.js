import { Router } from 'express';

const router = Router();

let savedDesigns = [];

router.get('/', (req, res) => {
  res.json(savedDesigns);
});

router.post('/', (req, res) => {
  const design = req.body;
  savedDesigns.push(design);
  res.json({ message: 'Diseño guardado', design });
});

export default router;