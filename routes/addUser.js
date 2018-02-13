const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('newWill')
})

router.post('/', (req, res) => {
  console.log(req.body)
  db.addUser(req.body)
    .then(() => res.redirect('/html', req.body))
})

module.exports = router
