import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  content: String,
  author: String,
});

module.exports = mongoose.model('Chat', ChatSchema);
