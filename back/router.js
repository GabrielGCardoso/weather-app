const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./presentation/routes/weatherRoutes'));

app.use(require('./middleware/errorMiddleware'));
app.all('*', async (req, res) => {
    res.status(404).send('route not found');
});

module.exports = app;
