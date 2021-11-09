const express = require('express')
const app = express()
const userRouter = require('./routes/usersRoute');
const gamesRouter = require('./routes/gamesRoute');
var cors = require('cors')

app.use(cors())
var morgan = require('morgan');

app.use(morgan('dev'));
// app.get('/', function(req, res){
//     res.send("Hello from backend")
// })

app.use("/users",userRouter);
app.use("/games",gamesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
