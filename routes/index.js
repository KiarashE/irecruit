var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;

/*
var mongoose = require('mongoose');
var schema = require('../schema/schema_applicant');


mongoose.connect('mongodb://localhost:27017/irecruitdb');
var Applicant = mongoose.model('Applicant', schema, 'applicants');

var applicant = new Applicant({
    first_name: 'Kiarash',
    last_name: 'Effatian',
    email: 'email.kia@gmail.com',
    tel: '073-5959707',
    yearOfBirth: '1970',
    street: 'Stora Marknadsvägen 9',
    postal_code: 18334,
    city: 'Stockholm',
    linkedin_link: 'https://www.linkedin.com/in/kiarash-effatian'
});

applicant.save(function (error) {
    if(error) {
        console.log(error);
        process.exit(1);
    }
    Applicant.find({email: 'email.kia@gmail.com'}, function (error, docs) {
        if(error) {
            console.log(error);
        }
        console.log(require('util').inspect(docs));
        process.exit(0);
    });
});




var mongodb = require('mongodb');
var uri = "mongodb://localhost:27017";

mongodb.MongoClient.connect(uri, function (error, client) {
    var db = client.db("irecruitdb");
    if(error) {
        console.log(error);
        process.exit(1);
    }

    db.collection('person').insert({firstname: 'Thomas', lastname: 'Mesko'}, function (error, result) {
        if(error) {
            console.log(error);
            process.exit(1);
        }

        db.collection('person').find().toArray(function (error, docs) {
            if(error) {
                console.log(error);
                process.exit(1);
            }

            console.log("Find docs: ");
            docs.forEach(function (doc) {
                console.log(JSON.stringify(doc));
            });
            process.exit(0);

        });
    });
});
*/