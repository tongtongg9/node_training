const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello to the world of Node.js');
});

app.listen(port, () => {
    console.log(`Example app listening at => ${chalk.green(`http://localhost:${port}`)}`);
});
