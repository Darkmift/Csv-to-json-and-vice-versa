import { Router } from 'express';
//api routes
import playerRoutes from './api/players/players.routes.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('api is running');
});

router.use('/players', playerRoutes);

export default router;