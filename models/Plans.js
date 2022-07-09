const mongoose = require('mongoose');

const Plans = new mongoose.Schema({
    zip: {
        type: Array,
        required: false,
        unique:false,
    },
    image: {
        type: String,
        required: false,
        unique:false,
    },
    provider: {
        type: String,
        required: false,
        unique:false,
    },
    name: {
        type: String,
        required: false,
        unique:false,
    },
    relevance:{
        type: Number,
        required: false,
        unique:false,
    },
    price: {
        type: String,
        required: false,
        unique:false,
    },
    speed: {
        type: Number,
        required: false,
        unique:false
    },
    tel: {
        type: String,
        required: false,
        unique:false,
    },
    caps: {
        type: String,
        required: false,
        unique:false,
    },
    link: {
        type: String,
        required: false,
        unique:false,
    }
});

module.exports = mongoose.model("redisUpdated", Plans);