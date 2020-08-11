const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const sequelize = require('./database/database');
const gallery = require('./models/gallery');
const user = require('./models/usuario');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const galleryRoutes = require('./routes/gallery');
const imcRoutes = require('./routes/imc');
const userRoutes = require('./models/usuario');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(imcRoutes);
app.use(galleryRoutes);
app.use(userRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
