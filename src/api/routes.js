import { Router } from 'express';
import movie from './Movie/index.js';
import character from './Character/index.js';
import error from '../middlewares/error.js'

const router = Router();

router.use('/movies', movie);
router.use('/character', character);
router.use(error);

export default router;