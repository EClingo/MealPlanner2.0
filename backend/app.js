const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const User = require('./models/user');

//create express app
const app = express();

//connect to MongoDb 
const dbURI = 'mongodb+srv://eric_c:godmoney99@mealplanner.dsofb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => {
    console.log(err);
})
//sandbox route to test models and db connection
app.get('/add-user', (req, res) => {

    const user = new User({
        name: 'Eric',
        email: 'eric@clingo.io',
        householdCount: 5
    });
    
    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})



app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    
    res.sendFile('./views/index.html', { root: __dirname });
});