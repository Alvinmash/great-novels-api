const novel = (connection, Sequelize, author) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    authorId: {
      type: Sequelize.INTEGER,
      references: { model: author, key: 'id' },
      title: { type: Sequelize.STRING },
    },
    paranoid: true
  })
}

module.exports = novel
