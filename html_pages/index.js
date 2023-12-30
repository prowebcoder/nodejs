const express = require('express');
const path = require('path');

const app = express();
const dirPath = path.join(__dirname, 'inner');

app.use(express.static(dirPath));

app.listen(5000);
