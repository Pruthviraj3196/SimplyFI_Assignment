const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/', articleController.createArticle);
router.post('/:id/like', articleController.likeArticle);
router.post('/:id/view', articleController.viewArticle);

module.exports = router;
