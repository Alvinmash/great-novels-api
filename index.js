const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelById } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovelById)

app.all('*', (request, response) => {
  return response.status(404).send('sorry! novels  not found')
})

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080...')
})
