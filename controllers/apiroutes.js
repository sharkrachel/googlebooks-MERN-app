const db = require("../models");

const axios = require("../client/node_modules/axios");

function apiRoutes(app) {
    app.get("/api/googlebooks/:title", function (req, res) {
        const title = req.params.title;
        const URL = "https://www.googleapis.com/books/v1/volumes?q=" + title
        axios.get(URL)
            .then(function (response) {
                res.json(response.data.items)
            });
    })

    app.post("/api/books", function (req, res) {
        console.log("req.body: ", req.body);
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })

    app.get("/api/books", function (req, res) {
        db.Book
        .find()
        .then(result => {
            res.json(result)
        })
    })

    app.delete("/api/books/:id", function (req, res){
        db.Book
        .remove({ _id: req.params.id })
        .then(result => {
            res.json(result);
        });
        
    })

    

}


module.exports = apiRoutes;