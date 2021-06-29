const mongoose = require('mongoose');

const AltsSchema = new mongoose.Schema({
      
    page: {
        type: String,
        required: false,
        unique:false,
    },
    type: {
      type: String,
      required: false,
      unique:false,
    },
    images: {
        type: Array,
        required: false,
        unique:false,
    },
    metatags: {
      type: Object,
      required: false,
      unique:false,
  },

}) 

module.exports = mongoose.models.alts || 
mongoose.model('alts', AltsSchema);
