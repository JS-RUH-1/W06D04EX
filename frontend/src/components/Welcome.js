import { useState, useEffect } from "react";
import axios from "axios";

function Welcome() {
  const [word, setWord] = useState("");

  useEffect(() => {
    axios.get("/users/home").then((res) => {
      console.log(res.data.message);
      setWord(res.data.message);
    });
  });

  return (
    <>
      <h3>{word}</h3>
    </>
  );
}
export default Welcome;
