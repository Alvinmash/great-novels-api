module.exports = {
  up: (queryInterface,) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('novels', [{
      id: 1,
      title: 'Dracula',
      authorId: 1,
      createdAt: '2020-04-04T15:57:59.000Z',
      updatedAt: '2020-04-04T15:57:59.000Z',
      author: {
        id: 1,
        nameFirst: 'Bram',
        nameLast: 'Stoker',
        createdAt: '2020-04-04T15:57:59.000Z',
        updatedAt: '2020-04-04T15:57:59.000Z'
      },
      genres: [
        {
          id: 6,
          name: 'Fantasy',
          createdAt: '2020-04-04T15:57:58.000Z',
          updatedAt: '2020-04-04T15:57:58.000Z',
          novelsGenres: {
            genreId: 6,
            novelId: 1,
            createdAt: '2020-04-04T15:58:00.000Z',
            updatedAt: '2020-04-04T15:58:00.000Z'
          }
        },

      ]
    },

    ])
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('heroes')
  }
}
