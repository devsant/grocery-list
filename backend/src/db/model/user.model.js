const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    index: true,
    unique: true,
  },
  name: String,
  last_name: String,
  email: {
    type: String,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('Users', userSchema);

module.exports = User;