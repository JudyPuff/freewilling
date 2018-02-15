const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('newWill')
})

router.post('/newWill', (req, res) => {
  return 
  db.addUser(req.body)
    .select()
    res.render('html', req.body)
})

module.exports = router
