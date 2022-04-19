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
const workList = []

/* Home Route */
app.get('/', (req, res) => {
    res.render('list', { listTitle: date.fulltoDay(), lists: lists, year: new Date().getFullYear() })
})
app.post('/', (req, res) => {
    let item = req.body.addItem
    if (req.body.button === 'Work') {
        workList.push(item)
        res.redirect('/work')
    } else {
        lists.push(req.body.addItem)
        res.redirect('/')
    }
})

/* Work ROUTE */
app.get('/work', (req, res) => {
    res.render('list', { listTitle: 'Work List', lists: workList, year: new Date().getFullYear() })
})
app.post('/work', (req, res) => {
    workList.push(req.body.addItem)
    res.redirect('/work')
})

/* About ROUTE */
app.get('/about', (req, res) => {
    res.render('about', { year: new Date().getFullYear() })
})

/* Help ROUTE */
app.get('/help', (req, res) => {
    res.render('help', { year: new Date().getFullYear() })
})


app.listen(process.env.PORT || 3000, () => {
    console.log('LISTEN at the port 3000')
})