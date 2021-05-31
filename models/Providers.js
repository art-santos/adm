const mongoose = require('mongoose');

const Providers = new mongoose.Schema({
  provider: {
    type: String,
    required: true,
    unique: false,
  },
  name: {
    type: String,
    required: true,
    unique: false,
  },
  relevance: {
    type: Number,
    required: true,
    unique: false,
  },
  tel: {
    type: String,
    required: true,
    unique: false,
  },
  phone: {
    type: String,
    required: true,
    unique: false,
  },
  image: {
    type: String,
    required: true,
    unique: false,
  },
 
});

module.exports =
  mongoose.models.providers || mongoose.model('providers', Providers);
