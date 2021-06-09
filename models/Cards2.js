const mongoose = require('mongoose');

const CardsSchema = new mongoose.Schema({
  zip: {
    type: Number,
    required: true,
    unique: false,
    maxlength: [5, 'Zip code cannot be more than 5 characters'],
  },
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
  telephone: {
    type: String,
    required: true,
    unique: false,
  },
  highlight1: {
    type: String,
    unique: false,
  },
  highlight2: {
    type: String,
    unique: false,
  },
  highlight3: {
    type: String,
    unique: false,
  },
  highlight4: {
    type: String,
    unique: false,
  },
});

module.exports =
  mongoose.models.plans || mongoose.model('plans', CardsSchema);
