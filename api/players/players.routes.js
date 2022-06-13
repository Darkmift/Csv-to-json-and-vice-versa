import { Router } from 'express';
import { postPlayerCsv, objectTocsv } from './players.controller.js';

const router = Router();

router.get('/', objectTocsv)
router.post('/', postPlayerCsv)

export default router;