const express = require("express");

const app = express();

app.use(express.json());

app.post('/cats', async (req, res) => {
    res.send(201).json(req.body);
});

module.exports = app;