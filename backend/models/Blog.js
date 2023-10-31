const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model('Blogs', blogSchema,'Blogs');

module.exports = Blog;