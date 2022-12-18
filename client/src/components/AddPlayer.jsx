import "./../css/AddPlayer.css";
import { useRef } from "react";

export default function AddPlayer() {
  const playerFormInput = useRef();

  // Submit form function
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // save new user to database
    const res = await fetch("http://localhost:3000/user/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: playerFormInput.current.value }),
    });
    const response = await res.json();
    console.log(response);

    // clear form
    playerFormInput.current.value = "";
  };

  return (
    <form className="addPlayerForm" onSubmit={(e) => onSubmitHandler(e)}>
      <label htmlFor="addPlayer">Add New Player: </label>
      <input type="text" id="addPlayer" name="addPlayer" ref={playerFormInput} required />
      <button>Add</button>
    </form>
  );
}
