const novelGenres = (connection, Sequelize, novel, genres) => {
  return connection.define('novelGenres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: novel, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: genres, key: 'id' } },
  }, { paranoid: true })
}


module.exports = novelGenres
