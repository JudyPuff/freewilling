const express = require('express')
const fs = require('fs')
const path = require('path')
const convert = require('wkhtmltopdf')
const db = require('./db')
const bodyParser = require('body-parser')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/newWill', (req, res) => {
  res.render('newWill')
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  db.getWill (id)
    .then(user => {
      res.render('html', user)
    })
    // .then(convert(user))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/pdf/:id', (req, res) => {
  const id = req.params.id
  convert(`http://localhost:3000/${id}`, { disableSmartShrinking: true }).pipe(res)
})
// router.post('/newWill', (req, res) => {
//   return 
//   const bodyText = req.body
//   .select()
//   console.log(bodyText)
//   // req.flash(bodyText)
//   // res.convert(bodyText)
//   res.render('html', bodyText)

// })

router.post('/newWill', (req, res) => {
  console.log(req.body)
  db.addUser(req.body)
    .then(() => res.redirect('/html', req.body))
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