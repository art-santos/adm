const mongoose = require('mongoose');

const CardsSchema = new mongoose.Schema({
  zip: {
    type: Number,
    required: false,
    unique: false,
    maxlength: [5, 'Zip code cannot be more than 5 characters'],
  },
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
  price: {
    type: String,
    required: false,
    unique: false,
  },
  speed: {
    type: Number,
    required: false,
    unique: false,
  },
  speedtitle: {
    type: String,
    required: false,
    unique: false,
  },
  telephone: {
    type: String,
    required: false,
    unique: false,
  },
  desc1: {
    type: String,
    unique: false,
  },
  desc2: {
    type: String,
    unique: false,
  },
  desc3: {
    type: String,
    unique: false,
  },
  desc4: {
    type: String,
    unique: false,
  },
});

module.exports =
  mongoose.models.plans || mongoose.model('plans', CardsSchema);
