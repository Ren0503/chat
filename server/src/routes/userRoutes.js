import express from 'express';
import {
    allUsers,
    login,
    register,
} from '../controllers/userControllers';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
    .post(register)
    .get(protect, allUsers)

router.post('/login', login)

export default router;