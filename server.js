const express = require('express');

const app = express();

const port = 8080;

const projects = require('./src/projects/projectData');




app.set('json spaces', 2);

app.get('/man', (req, res) => {

    data = [
        {
            id: 1,
            name:'Ashik',

        },
          {
            id: 2,
            name:'Bidhan',
            
        }
    ];
    res.json(data);
});

app.get('/api', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    const customers = [
        {
            id:3,
            name: 'Ashik',
            professional: 'Software Developer',
            age: 29,

        },
        {
            id:9,
            name: 'Sikder',
            professional: 'UNO',
            age: 45,

        }

    ];

    

      res.json(customers);

})

app.get('/projects', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    /*const projects = [
        {
            id: 1,
        }
    ]
    */

    res.json(projects);

})



app.listen(port, () => {
    console.log(` Express app is listening on port ${port}`);
})