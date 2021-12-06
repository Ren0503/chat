import express from 'express';
import {
    getMessages,
    sendMessage,
} from '../controllers/messageControllers';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/:chatId').get(protect, getMessages)

router.route('/').post(protect, sendMessage)

export default router;