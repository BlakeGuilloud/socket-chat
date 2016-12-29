'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChat = exports.fetchChats = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var fetchChats = exports.fetchChats = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var chats;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            chats = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _chat2.default.find().exec();

          case 4:
            chats = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            if (chats.length) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', _promise2.default.reject(new _tael.NotFoundError('No chats found')));

          case 12:
            return _context.abrupt('return', _promise2.default.resolve(chats));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function fetchChats() {
    return _ref.apply(this, arguments);
  };
}();

var createChat = exports.createChat = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(chat) {
    var newChat;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newChat = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _chat2.default.create(chat);

          case 4:
            newChat = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:

            console.log('new chat', newChat);
            return _context2.abrupt('return', _promise2.default.resolve(newChat));

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function createChat(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _chat = require('../models/chat.model');

var _chat2 = _interopRequireDefault(_chat);

var _tael = require('tael');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }