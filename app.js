const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World – Here I am! this is Lab5!!!!!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
