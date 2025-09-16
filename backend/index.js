const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://gabrield3vsilva:1981Abcd.@cluster0.bysvs1s.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});


app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});