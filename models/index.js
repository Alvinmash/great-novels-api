const Sequelize = require('sequelize')
const AuthorModel = require('./authors')
const GenresModel = require('./genres')
const NovelModel = require('./novels')
const allConfigs = require('../configs/sequelize')

const config = allConfigs[environment]

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const NovelGenresModel = require('./novelGenres')

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Author = AuthorModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novel = NovelModel(connection, Sequelize)
const NovelGenres = NovelGenresModel(connection, Sequelize, Novel, Genres)

Author.hasMany(Novel)
Novel.belongsTo(Author)


Novel.belongsToMany(Genres, { through: NovelGenres })
Genres.belongsToMany(Novel, { through: NovelGenres })


module.exports = {
  Author, Genres, Novel, NovelGenres, op: Sequelize.Op
}
