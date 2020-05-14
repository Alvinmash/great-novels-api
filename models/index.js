const sequelize = require('sequelize')
const AuthorModel = require('./authors')
const GenresModel = require('./genres')
const NovelModel = require('./novels')
const NovelGenresModel = require('./novelGenres')

const connection = new sequelize('novels', 'novels', 'N0V3ls', {
  host: 'localhost', dialect: 'mysql',
})

const Author = AuthorModel(connection, sequelize)
const Genres = GenresModel(connection, sequelize)
const Novel = NovelModel(connection, sequelize)
const NovelGenres = NovelGenresModel(connection, sequelize, Novel, Genres)

Author.hasMany(Novel)
Novel.belongsTo(Author)


Novel.belongsToMany(Genres, { through: NovelGenres })
Genres.belongsToMany(Novel, { through: NovelGenres })


module.exports = { Author, Genres, Novel, NovelGenres }
