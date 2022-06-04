const express = require("express");
const app = express();
const bodyParser = require('body-parser');

var cors = require('cors');
const { AddWord } = require("../Controllers/insertWord");

app.use(bodyParser.json([]));


app.get("/addWord", AddWord);
