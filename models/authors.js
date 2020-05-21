const author = (connection, Sequelize) => {
  return connection.define('author', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: Sequelize.STRING },
    nameLast: { type: Sequelize.STRING },
  },
  { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}


module.exports = author
