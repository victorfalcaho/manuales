const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.render('imc', {
    resul: 0,
  });
});

route.post('/calcular-imc', (req, res) => {
  const { estatura, peso } = req.body;
  const resul = peso / estatura ** 2;
  res.render('imc', {
    resul: resul.toFixed(2),
  });
});

module.exports = route;
