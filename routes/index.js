var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;

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

