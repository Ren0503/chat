import express from 'express';
import {
    accessChat,
    fetchChats,
    createGroupChat,
    renameGroup,
    addToGroup,
    removeFromGroup,
} from '../controllers/chatControllers';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
    .post(protect, accessChat)
    .get(protect, fetchChats)

router.route('/group').post(protect, createGroupChat)

router.route('/rename').put(protect, renameGroup)

router.route('/group_add').put(protect, addToGroup)

router.route('/group_remove').put(protect, removeFromGroup)

export default router;