const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comments : {
        type : String, 
        required : false
    }

});

module.exports = mongoose.model('comments', commentsSchema);