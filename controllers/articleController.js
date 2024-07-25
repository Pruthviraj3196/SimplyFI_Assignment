const mongoose = require('mongoose');
const Article = require('../models/Article');
const ArticleLike = require('../models/ArticleLike');
const ArticleView = require('../models/ArticleView');
const User = require('../models/User');
const Notification = require('../models/Notification');

exports.createArticle = async (req, res) => {
  try {
    const { title, author, body } = req.body;
    const article = new Article({ title, author, body, likes: 0, views: 0 });
    await article.save();
    res.status(201).send(article);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.likeArticle = async (req, res) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    const articleId = mongoose.Types.ObjectId(id);

    const like = new ArticleLike({ articleId, userId });
    await like.save();

    const article = await Article.findByIdAndUpdate(
      articleId,
      { $inc: { likes: 1 } },
      { new: true }
    );

    // Send notification
    const articleAuthor = await Article.findById(articleId).select('author');
    const notification = new Notification({
      userId: articleAuthor.author,
      message: `Your article has been liked by user ${userId}`
    });
    await notification.save();

    res.status(200).send(article);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.viewArticle = async (req, res) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    const articleId = mongoose.Types.ObjectId(id);

    const view = new ArticleView({ articleId, userId });
    await view.save();

    const article = await Article.findByIdAndUpdate(
      articleId,
      { $inc: { views: 1 } },
      { new: true }
    );

    res.status(200).send(article);
  } catch (err) {
    res.status(400).send(err);
  }
};
