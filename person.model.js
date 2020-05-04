const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Person = new Schema({
    person_email : {
        type : String
    },

    person_password : {
        type : String
    }
}, {
    collection: 'person'
});

module.exports= mongoose.model('Person', Person);