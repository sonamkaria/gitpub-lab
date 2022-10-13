const express = require('express') 
const app = express()
const drinks = require('./models/drinks.js'); 
const foods = require('./models/foods.js');
//index - drinks
app.get('/drinks',(req,res) =>{
    res.render('drinks_index.ejs',{
         allDrinks: drinks
     })
})

//index - foods
app.get('/foods',(req,res) =>{
    res.render('food_index.ejs',{
         allFoods: foods
     })
})

// show - drinks
app.get('/drinks/:id', (req, res) => {
    //res.send(req.params.id)
     res.render('drinks_show.ejs', {
    //     //second param must be an object
       allDrinks: drinks[req.params.id], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
     });
});

// show - foods
app.get('/foods/:id', (req, res) => {
     res.render('food_show.ejs', {
         //second param must be an object
       allFoods: foods[req.params.id], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
     });
});

app.get('/',(req,res) =>{
    res.send('Welcome to the Gitpub App!')
})

app.listen(3000, () => {
    console.log('listening')
})