import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users/users2").then((res) => {
      console.log(res);
      setUsers(res.data.usersList);
    });
  });

  return (
    <>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </>
  );
}
export default Users;
