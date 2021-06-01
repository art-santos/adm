const mongoose = require('mongoose');

const Zips = new mongoose.Schema({
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
  mongoose.models.zips || mongoose.model('zips', Zips);
