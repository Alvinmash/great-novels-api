const genres = (connection, sequelize) => {
  return connection.define('genres', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize.STRING },
  }, { paranoid: true })
}

module.exports = genres
