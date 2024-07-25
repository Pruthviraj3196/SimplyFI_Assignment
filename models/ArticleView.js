const mongoose = require('mongoose');

const articleViewSchema = new mongoose.Schema({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Article'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, { timestamps: true });

const ArticleView = mongoose.model('ArticleView', articleViewSchema);
module.exports = ArticleView;
