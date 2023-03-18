const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Express with typescript');
});

app.listen(8082);