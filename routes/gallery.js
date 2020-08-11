const express = require('express');

const route = express.Router();

route.get('/galeria', (req, res) => {
  res.render('gallery');
});

module.exports = route;
