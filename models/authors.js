const author = (connection, sequelize) => {
  return connection.define('author', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: sequelize.STRING },
    nameLast: { type: sequelize.STRING },
  }, { paranoid: true })
}


module.exports = author
