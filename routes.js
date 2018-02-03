const express = require('express')
const fs = require('fs')
const path = require('path')
// const data = require("./data.json")
const bodyParser = require('body-parser')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/newWill', (req, res) => {
  res.render('newWill')
})


module.exports = router