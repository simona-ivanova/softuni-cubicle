const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (res, req) => {
res.send('Home page');
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));