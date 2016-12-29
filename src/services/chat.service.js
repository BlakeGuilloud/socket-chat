import Chat from '../models/chat.model';
import { NotFoundError } from 'tael';

export async function fetchChats() {
  let chats;

  try {
    chats = await Chat.find().exec();
  } catch (err) {
    return Promise.reject(err);
  }

  if (!chats.length) return Promise.reject(new NotFoundError('No chats found'));

  return Promise.resolve(chats);
}

export async function createChat(chat, params) {
  let newChat;

  try {
    newChat = await Chat.create(chat);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newChat);
}
