const express = require('express');

const route = express.Router();

route.get('/productos', (req, res) => {
  res.render('admin/products-admin');
});

module.exports = route;
