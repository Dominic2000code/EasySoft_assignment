const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const assert = require('assert');
const router = require('express').Router()
const url = 'mongodb://localhost:27017/employeedb';

router.get('/todoList', function(req, res, next) {
    const resultArray=[];
    res.render('todoList',{title:'Todo List',resultArray});
});

router.get('/new',(req,res)=>{
    res.render('new')
});

router.post('/upload',function(req, res) {
    var item = {
        employeeID:req.body.employeeID,
        name: req.body.name,
        todos: req.body.todos
    };

    mongo.connect(url,{ useUnifiedTopology: true },function(err, db) {
        assert.equal(null, err);
        db.collection('todos').insertOne(item, function(err, result) {
        assert.equal(null, err);
        console.log('Item inserted');
        db.close();
        });
    });

    res.redirect('/todoList');
});



router.get('/get-data', function(req, res, next) {
    const resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('todos').find();
        cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
        }, function() {
        db.close();
        res.render('todoList', {resultArray,title:'Todo List'});
        
        });
    });
});

router.get('/findTodo', function(req, res, next) {
    var employeeID = req.body.employeeID;
    const resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('todos').find(employeeID);
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
            }, function() {
            db.close();
            res.render('show', {resultArray});
            
            });
    });
});


module.exports = router;




