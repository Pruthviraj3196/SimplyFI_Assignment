const mongoose = require('mongoose');

const articleLikeSchema = new mongoose.Schema({
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

const ArticleLike = mongoose.model('ArticleLike', articleLikeSchema);
module.exports = ArticleLike;
