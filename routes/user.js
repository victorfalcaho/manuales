const express = require('express');

const route = express.Router();

route.get('/usuarios', (req, res) => {
  res.render('user/user');
});

route.get('/agregar-usuarios', (req, res) => {
  res.render('user/adduser');
});

route.get('/editar-usuarios', (req, res) => {
  res.render('user/edituser');
});

module.exports = route;
