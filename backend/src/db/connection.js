const mongoose = require('mongoose');

require('dotenv').config();

const {
  MONGODB_HOST,
  MONGODB_DATABASE,
} = process.env;

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

const initiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB!!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = initiateMongoServer;