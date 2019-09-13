const express = require('express')

const app = express()

const users = [{
    id: 1,
    name: "Jean Smaug"
}, {
    id: 2,
    name: "Timmy"
}]

app.get('/', function(req, res) {
    res.json({message: 'Hello World!'});
})
  
app.get('/bogass/:id', function(req, res) {
    res.json({ name: users[req.params.id] });
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
