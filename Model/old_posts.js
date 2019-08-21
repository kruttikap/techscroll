const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oldPostsSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now()

});

module.exports = mongoose.model('oldPosts', oldPostsSchema);