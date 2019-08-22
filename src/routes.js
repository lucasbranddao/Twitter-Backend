const express = require('express');
const routes = express.Router();
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');
const DeleteController = require('./controllers/DeleteController');


routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id/:type/:clickAuthor', LikeController.store);
routes.delete('/delete/:id', DeleteController.delete);

module.exports = routes;