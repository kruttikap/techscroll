const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title : {
        type : String, 
        required : false
    }, 
    url : {
        type : String,
        required : false
    },
    id : {
        type : String,
        required : false
    } 

});

module.exports = mongoose.model('News', newsSchema);