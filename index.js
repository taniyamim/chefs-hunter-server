const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


const chefs = require('./data/chefs.json');
const chefsRecipe = require('./data/chefsRecipe.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('chefs server running')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

// app.get('/chefsRecipe', (req, res) => {
//   res.send(chefsRecipe)
// })

app.get('/chefs/:id' , (req , res) => {
    const id = (req.params.id) ;
    console.log(id);
    console.log(chefs);
    const selectedChef = chefs.find(n => n.id == id)
    res.send(selectedChef);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})