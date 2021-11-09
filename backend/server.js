const express = require('express')
const app = express()
const userRouter = require('./routes/usersRoute');
const gamesRouter = require('./routes/usersRoute');

// app.get('/', function(req, res){
//     res.send("Hello from backend")
// })

app.use("/users",userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
