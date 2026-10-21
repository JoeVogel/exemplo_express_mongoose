require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando com MongoDB e Mongoose!' });
});

/* ---------- Criar conexão com o banco ---------- */

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

/* ---------- Sobe nosso servidor de aplicação ---------- */

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
