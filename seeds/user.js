
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, 
          name: 'Chocolate Moose',
          city: 'Auckland',
          occupation: 'Head Moose',
          executor1: 'Mama Moose',
          executor1city: 'Auckland',
          executor1occ: 'Moosewife',
          executor2: 'Uncle Moose',
          executor2city: 'Auckland',
          executor2occ: 'Technical Goofer',
          beneficiary: 'Baby Moose',
          resBen: 'Nephew Moose',
          remains: 'buried'
      }
      ]);
    });
};
