const express = require('express')
const fs = require('fs')
const path = require('path')
const convert = require('wkhtmltopdf')
// const data = require("./data.json")
const bodyParser = require('body-parser')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/newWill', (req, res) => {
  res.render('newWill')
})

router.post('/newWill', (req, res) => {
  const bodyText = req.body
  console.log(bodyText)
  // req.flash(bodyText)
  // res.convert(bodyText)
  res.render('html', bodyText)

})

// router.get('/html', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('index', { users: users })
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })


module.exports = router