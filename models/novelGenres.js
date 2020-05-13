const novelGenres = (connection, sequelize, novel, genres) => {
  return connection.define('novelGenres', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    novelId: { type: sequelize.INTEGER, primaryKey: true, references: { model: novel, key: 'id' } },
    genreId: { type: sequelize.INTEGER, primaryKey: true, references: { model: genres, key: 'id' } },
  }, { paranoid: true })
}


module.exports = novelGenres
