const mongoose = require('mongoose');

const MatatagSchema = new mongoose.Schema({
    metatags: {
      type: Object,
      required: false,
      unique:false,
  },

}) 

module.exports = mongoose.models.metatags || 
mongoose.model('metatags', MatatagSchema);
