import { createChat, fetchChats} from '../services/chat.service';
import { SendSuccess, SendError } from 'tael';

export function getChats(req, res) {
  return Promise.resolve()
    .then(fetchChats)
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function postChat(req, res) {
  return Promise.resolve()
    .then(() => createChat(req.body))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
