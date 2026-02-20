import express from 'express';
import cors from 'cors';
import { chatHandler } from './chat.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', chatHandler);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Novus Assist server running on port ${PORT}`);
});
