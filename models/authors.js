const author = (connection, Sequelize) => {
  return connection.define('author', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: Sequelize.STRING },
    nameLast: { type: Sequelize.STRING },
  }, { paranoid: true })
}


module.exports = author
