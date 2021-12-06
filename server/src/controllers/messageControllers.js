import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel';

const getMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate('sender', 'name avatar email')
            .populate('chat');
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
        console.log('Invalid data passed into request');
        return res.sendStatus(400);
    }

    var newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };

    try {
        const message = await Message.create(newMessage);
        const createdMess = await message
            .populate('sender', 'name avatar')
            .populate({
                path: 'chat',
                populate: { path: 'users', select: 'name avatar email' }
            })

        await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

        res.json(createdMess);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

export {
    getMessages,
    sendMessage,
}