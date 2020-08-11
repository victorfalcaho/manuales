const express = require('express');

const route = express.Router();

route.get('/imc', (req, res) => {
  res.render('imc');
});

module.exports = route;
