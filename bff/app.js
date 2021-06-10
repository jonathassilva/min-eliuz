const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello from BFF!')
})

app.get('/author-name', (req, res) => {
    // author = { "author": [{ "firstName": "Jonathas", "lastName": "Santos" }] };
    author = "Jonathas Santos"
    res.send(author)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
