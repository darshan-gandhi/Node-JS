var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre');
Book = require('./models/books');

var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send("Please use /api/books or /api/genres");
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/genres/:_id',function(req,res){
    Genre.getGenreById(req.params._id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.post('/api/genres',function(req,res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genres){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id',function(req,res){
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id',function(req,res){
    var id = req.params._id;
    Genre.deleteGenre(id, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});


app.get('/api/books',function(req,res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.get('/api/books/:_id',function(req,res){
    Book.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});