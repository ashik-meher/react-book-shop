const express = require('express');

const app = express();

const port = 8080;



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

app.listen(port, () => {
    console.log(` Express app is listening on port ${port}`);
})