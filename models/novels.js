const novel = (connection, Sequelize, author) => {
  return connection.define('novels', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: {
      type: Sequelize.INTEGER,
      references: { model: author, key: 'id' },
    },
  },
  { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  {
    paranoid: true
  })
}

module.exports = novel
