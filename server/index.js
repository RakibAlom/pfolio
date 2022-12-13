const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors())
app.use(express.json());

const portfolios = require('./portfolios.json');

app.get('/portfolios', (req, res) => {
  res.send(portfolios);
})

app.get('/portfolio/:slug', (req, res) => {
  const portfolio = portfolios.find(portfolio => portfolio.slug == req.params.slug);
  res.send(portfolio);
})

app.get('/', (req, res) => {
  res.send('rakib alom server is running')
})

app.listen(port, () => {
  console.log(`rakib alom server running on port: ${port}`)
})