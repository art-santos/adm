const mongoose = require('mongoose');

const Providers = new mongoose.Schema({
  provider: {
    type: String,
    required: false,
    unique: false,
  },
  name: {
    type: String,
    required: false,
    unique: false,
  },
  relevance: {
    type: Number,
    required: false,
    unique: false,
  },
  tel: {
    type: String,
    required: false,
    unique: false,
  },
  phone: {
    type: String,
    required: false,
    unique: false,
  },
  image: {
    type: String,
    required: false,
    unique: false,
  },
 
});

module.exports =
  mongoose.models.providers || mongoose.model('providers', Providers);
