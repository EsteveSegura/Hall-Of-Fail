const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hall-of-fame', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to mongoDB")
})

const app = express();
const router = require('../routes/api.js');
const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, //1
    max: 15
})

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/api/', apiLimiter)
app.use('/api', router)
app.use('/', express.static('../public'))

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
});