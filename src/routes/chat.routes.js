import express from 'express';
import * as chatController from '../controllers/chat.controller';

const router = express.Router();

router.get('/', chatController.getChats);
router.post('/', chatController.postChat);

module.exports = router;
