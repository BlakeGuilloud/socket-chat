import { createChat, fetchChats} from '../services/chat.service';
import { SendSuccess, SendError } from 'tael';
import Shuttle from './shuttle';

export function getChats(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(fetchChats))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function postChat(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(createChat, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
