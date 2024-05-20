require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const studyRoutes = require('./routes/study');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', studyRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server berjalan di port: ${port}`);
});