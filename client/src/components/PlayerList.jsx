import { useEffect, useState } from "react";

export default function () {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/user/getUsers");
      const response = await res.json();

      if (response.status == "SUCCESS" && response.data) {
        setUsers(response.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="playerListContainer">
      <ul>
        {users.map((element, index) => (
          <li key={index} style={{ display: "flex", margin: "1rem 2rem" }}>
            {" "}
            <p>{element.username}</p> <p>,</p> <p>{element.elo}</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
