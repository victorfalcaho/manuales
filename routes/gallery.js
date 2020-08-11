const express = require('express');

const gallery = require('../models/gallery');

const route = express.Router();

route.get('/galeria', async (req, res) => {
  try {
    const imagenes = await gallery.findAll();
    res.render('gallery', {
      resul: imagenes,
    });
  } catch (error) {
    console.log(error);
  }
});

route.post('/agregar-imagen', async (req, res) => {
  try {
    const { imagen } = req.body;
    const agregarimagen = await gallery.create({ imagen: imagen });
    if (agregarimagen) {
      res.redirect('/galeria');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
