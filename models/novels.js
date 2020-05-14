const novel = (connection, sequelize, author) => {
  return connection.define('novels', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    authorId: {
      type: sequelize.INTEGER,
      references: { model: author, key: 'id' },
      title: { type: sequelize.STRING },
    },
    paranoid: true
  })
}

module.exports = novel
