exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('city')
        table.string('occupation')
        table.string('executor1')
        table.string('executor1city')
        table.string('executor1occ')
        table.string('executor2')
        table.string('executor2city')
        table.string('executor2occ')
        table.string('beneficiary')
        table.string('resBen')
        table.string('remains')
        table.string('witness1')
        table.string('witness1city')
        table.string('witness1occ')
        table.string('witness2')
        table.string('witness2city')
        table.string('witness2occ')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };
