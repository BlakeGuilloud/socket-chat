'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getChats = getChats;
exports.postChat = postChat;

var _chat = require('../services/chat.service');

var _tael = require('tael');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChats(req, res) {
  return _promise2.default.resolve().then(_chat.fetchChats).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function postChat(req, res) {
  return _promise2.default.resolve().then(function () {
    return (0, _chat.createChat)(req.body);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}