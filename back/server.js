const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const service = require('./service');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get('/weather', async (req, res) => res.send(await service.getPlace(req.query)));

app.all('*', async (req, res) => {
    res.status(404).send('route not found');
});

app.listen(PORT, () => console.log(`server is listening on port  ${PORT}`));
