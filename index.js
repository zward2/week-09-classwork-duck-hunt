// This code will not work. It is intentionally broken, missing the configuration for the app
// 1) Fix this code by adding in the missing items
//  Hints: What are the basics needed for an express app?
//         What is missing to configure pug as the view engine
const scores = require('./scores')


// No Changes are needed below this line!!
app.get('/', (request, response) => {
  return response.render('index', { scores })
})

app.all('*', (request, response) => {
  response.sendStatus(404)
})

app.listen(3033, () => {
  console.log('Listening on port 3033...') // eslint-disable-line no-console
})
