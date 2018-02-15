const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    addUser,
    getWill
    //   deleteUser
}

// function getUsers (testConn) {
//   const conn = testConn || connection
//   return conn('users').select()
// }

// function getUser (id, testConn) {
//   const conn = testConn || connection
//   return conn('users').where('id', id).first()
// }

function getWill(id, testConn) {
    const conn = testConn || connection
    return conn('users')
        .where('id', id)
        .select(
        'name',
        'city',
        'occupation',
        'executor1',
        'executor1city',
        'executor1occ',
        'executor2',
        'executor2city',
        'executor2occ',
        'beneficiary',
        'resBen',
        'remains',
        'witness1',
        'witness1occ',
        'witness1city',
        'witness2',
        'witness2occ',
        'witness2city')
        .first()
}

function addUser(body, redirecter) {
    console.log(body)
    return connection('users')
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
            remains: body.remains,
            witness1: body.witness1,
            witness1occ: body.witness1occ,
            witness1city: body.witness1city,
            witness2: body.witness2,
            witness2occ: body.witness2occ,
            witness2city: body.witness2city})
    // function deleteUser (id) {
    //   return connection('users')
    //     .where('id', id)
    //     .del()
}
