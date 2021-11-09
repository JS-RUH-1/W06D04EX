const express = require("express");
const router = express.Router(); 
router.use(express.json());

const games = [
  {
    id: 1,
    name: "Tic Tac Toe",
  },
  {
    id: 2,
    name: "Uno",
  },
];
router.get('/allGames', function(req, res) { 
  
  res.send(games)
})

router.post('/addGame', function(req, res) { 
  req.body.data
  console.log("Post data : ",req.body.data.name)

  let newGame ={
    id:games.length+1,
    name:req.body.data.name
  }
  games.push(newGame)
  res.json(games)
  
})

router.delete('/deleteGame/:id',function(req, res){
  let found=games.find(function(item){
    return item.id===parseInt(req.params.id)
  })
  if(found){
    let targetIndex =games.indexOf(found)
    games.splice(targetIndex,1)
    res.send(games)
  }
  else{
    res.sendStatus(404)
  }
})


module.exports = router;
