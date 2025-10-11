import express from 'express';
import cors from 'cors';
import designsRouter from './routes/designs.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Ruta para diseños
app.use('/api/designs', designsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});