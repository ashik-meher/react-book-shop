const express = require('express');

const app = express();

const port = 8081;


// For a db query in Node you particularly need two things
// 1. Mongo Client for Node
// 2. url domain param for db server

const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const ObjectId = require('mongodb').ObjectId;


// middleware

app.set('json spaces', 2);

app.get('/', (req, res) => {

    res.send('<h1> Hello World of Expresso API from ashik </h1>');

})

app.get('/emails', (req, res) => {

    mongoClient.connect(url, (err,db) => {

        if (err) throw err;


        const dbc = db.db('toto');

        const collectionName = 'emails';

        const query = {};

         dbc.collection(collectionName).find(query).toArray((err, emails) => {
            if (err) throw err;

           // const clientSideAddr = 'http://localhost:3000';

            const allowedClients = '*';


            res.setHeader('Access-Control-Allow-Origin', allowedClients);

            res.send(emails);

            db.close();
        });



       



    })

})


app.get('/emails/:id', (req, res)=> {
    const id = req.params.id;
    //res.send(`<h1> The Id Is ${id}</h1>`);

    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        
        dbo = db.db('toto');

        const collectionName = 'emails';

        const objId = new ObjectId(id);

        const query = {_id:objId};

        dbo.collection(collectionName).find(query).toArray((err, email) => {
            if (err) throw err;

            res.json(email);

            console.log(email);

            db.close();

        })

    })
})

app.listen(port, (req, res) => {
    console.log(`Express app is running on ${port}, listening and serving standby`);
})