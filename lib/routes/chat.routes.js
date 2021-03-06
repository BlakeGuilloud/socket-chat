'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _chat = require('../controllers/chat.controller');

var chatController = _interopRequireWildcard(_chat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', chatController.getChats);
router.post('/', chatController.postChat);

module.exports = router;