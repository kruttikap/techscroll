const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title : {
        type : String, 
        required : false,
    }, 
    url : {
        type : String,
        required : false,
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
    

});

module.exports = mongoose.model('news', newsSchema);