require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const middlewares = require('./middleware');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Lista de Super API',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;