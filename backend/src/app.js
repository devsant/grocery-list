const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const initiateMongoServer = require('./db/connection');

const user = require('./router/user.router');

require('dotenv').config();

// Initiate MOngo Server
initiateMongoServer();

const middleware = require('./middleware/errorHandler');

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

app.use('/user', user);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;