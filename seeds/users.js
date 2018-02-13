
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
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
          remains: 'buried',
          witness1: 'Left Neighbour',
          witness1occ: 'Roamer',
          witness1city: 'Auckland',
          witness2: 'Right Neighbour',
          witness2occ: 'Ranger',
          witness2city: 'Auckland'
      }
      ]);
    });
};
