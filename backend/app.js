const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const User = require('./models/user');
const Recipe = require('./models/recipie');
const cors = require('cors');

//create express app
const app = express();

//connect to MongoDb 
const dbURI = 'mongodb+srv://eric_c:godmoney99@mealplanner.dsofb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => {
    console.log(err);
});

//middleware and static files
app.use(express.json());//this allowed me to see json object in post req
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //this allows us to use post .body on req object
app.use(morgan('dev'));

//sandbox route to test models and db connection
app.post('/newuser', (req, res) => {
    let user = new User(req.body);
    console.log(req.body);
    user.save()
    .then((result) => {
        
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
});
app.post('/recipies', (req, res) => {
    let recipe = new Recipe(req.body);
    recipe.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})
//routing, most of this should be done thorough Vue
app.get('/', (req, res) => {
    
    res.sendFile('./views/index.html', { root: __dirname });
});