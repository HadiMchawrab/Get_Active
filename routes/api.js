import express from 'express';
import v1Router from '../api/v1.js';
var router = express.Router();

router.use('/v1', v1Router);

export default router;