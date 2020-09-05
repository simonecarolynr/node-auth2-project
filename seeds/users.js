
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'janedoe123', password: 'abc123', department: 'Marketing'},
        {username: 'johndoe123', password: 'abc123', department: 'Sales'},
        {username: 'bettywhite101', password: 'abc123', department: 'HR'}
      ]);
    });
};
