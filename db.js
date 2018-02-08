// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  addUser,
  deleteUser
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function addUser (body, redirecter) {
  console.log(body)
  return connection('user').select()
    .returning('id')
    .insert({
        name: body.name, 
        city: body.city, 
        occupation: body.occupation,
        executor1: body.executor1,
        executor1city: body.executor1city,
        executor1occ: body.executor1occ,
        executor2city: body.executor2city,
        executor2occ: body.executor2occ,
        beneficiary: body.beneficiary,
        resBen: body.resBen,
        remains: body.remains

    })
    .then(result => {
      connection('profiles')
        .insert({user_id: result[0], profile_pic: body.profilepic, url: body.url})
        .then(() => redirecter())
    })
}

// function deleteUser (id) {
//   return connection('users')
//     .where('id', id)
//     .del()
// }
