const express = require('express');

const usuario = require('../models/usuario');

const route = express.Router();

route.get('/usuarios', async (req, res) => {
  const resul = await usuario.findAll();
  res.render('user/user', {
    resul,
  });
});

route.get('/agregar-usuario', (req, res) => {
  res.render('user/adduser');
});

route.get('/editar-usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resul = await usuario.findByPk(id);
    res.render('user/edituser', {
      resul,
    });
  } catch (error) {
    console.log(error);
  }
});

route.post('/agregar-usuario', async (req, res) => {
  try {
    const { nombre, apellidos, foto, sexo } = req.body;
    const guardar = await usuario.create({
      nombre: nombre,
      apellidos: apellidos,
      foto: foto,
      sexo: sexo,
    });

    if (guardar) {
      res.redirect('/usuarios');
    }
  } catch (error) {
    console.log(error);
  }
});

route.post('/editar-usuario', async (req, res) => {
  try {
    const { nombre, apellidos, foto, sexo, id } = req.body;
    const editar = await usuario.findByPk(id);
    editar.nombre = nombre;
    editar.apellidos = apellidos;
    editar.foto = foto;
    editar.sexo = sexo;
    const editado = await editar.save();
    if (editado) {
      res.redirect('/usuarios');
    }
  } catch (error) {
    console.log(editar.nombre);
  }
});

route.post('/eliminar-usuario', async (req, res) => {
  try {
    const { id } = req.body;
    const result = await usuario.findByPk(id);
    const eliminar = await result.destroy(id);
    if (eliminar) {
      res.redirect('usuarios');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
