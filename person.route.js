const  express = require('express');
const personRoutes = express.Router();

let Person = require('./person.model');


// store data
personRoutes.route('/add').post(function(req,res){
    let person =  new person(req.body);
    person.save()
    .then(person => {
        res.status(200).json({'person': 'person is added successfully'});
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

// get data
personRoutes.route('/').get(function(req,res){
    Person.find(function (err, person){
        if(err)
        console.log(err);
        else{
            res.json(person);
        }
    });

});
