const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const conn = require('./db/conn')
conn()

const routes = require('./routes/routes')
app.use('/', routes)

// app.get('/', function(req, res) {
//     res.json({msg: 'Rota Principal'})
// })

app.listen(3000, function(){
    console.log('Server is running on port 3000')
})
