// PREFIX = (nod) 
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const date = require('./date')

const ejs = require('ejs')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))

const lists = ['Buy FOOD ', 'Make FOOD', 'Eat FOOD']
app.get('/', (req, res) => {
    res.render('list', { listTitle: date.fulltoDay(), lists: lists })
})

app.post('/', (req, res) => {
    lists.push(req.body.addItem)
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('LISTEN at the port 3000')
})