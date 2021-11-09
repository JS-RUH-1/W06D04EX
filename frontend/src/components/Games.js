import { useState, useEffect } from "react";
import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("/games/allGames").then((res) => {
      console.log(res.data);
      setGames(res.data);
    });
  },[name]);

  function addGame(e) {
    e.preventDefault();
    console.log(e.target.form[0].value)
    setName(e.target.form[0].value)
    axios.post("/games/addGame",{ data: { name:e.target.form[0].value } }).then((res) => {
      console.log("what game do u have: ", res)
    });
  }

  function deleteGame(e,id) {
    e.preventDefault()
    axios.delete("/games/deleteGame/"+id).then((res) => {
      console.log("what games do u have after delete: ", res.data)
      setGames(res.data);

    });
  }

  return (
    <>
      {console.log(games)}
      <h3>Games:</h3>
<form>
        <input
          type="text"
          name="game"
        ></input>
        <button onClick={(e) => {addGame(e)}}>Save</button>
        {games.map((game) => (
          <li>{game.name}<button onClick={(e) => {deleteGame(e,game.id)}}>Delete</button></li>
        ))} 
        </form>
    </>
  );
}
export default Games;
