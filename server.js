const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3001

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect('mongodb+srv://rickysoliman:C%minor7@cluster0.n5uas.mongodb.net/testDB', {
    auth: {
        user: 'rickysoliman',
        password: 'C%minor7'
    }
});
/*
mongoose.connect(MONGO_URL, {
  auth: {
    user: MONGO_DB_USER,
    password: MONGO_DB_PASSWORD
  },
  { useNewUrlParser: true }
})
*/

// require route
app.use('/', require('./routes/Routes'));

// app.post('/postData', (req, res) => {
//     res.send('hello world');
// });

app.get('/getData', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});