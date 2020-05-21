const novelsGenres = (connection, Sequelize, novel, genres) => {
  return connection.define('novelsGenres', {
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: novel, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: genres, key: 'id' } },
  },
  { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}


module.exports = novelsGenres
