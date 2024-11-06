import React, { useState, useEffect } from "react";
import Input from "./component/Input";
import "./styles/App.css";

function App({ socket }) {
  // Set up state variables
  const [score, setScore] = useState({});
  const [playerScores, setPlayerScores] = useState([]);

  // Use useEffect to handle socket events
  useEffect(() => {
    // Set up the connection listener
    socket.on("connect", () => {
      console.log("Connected to web-socket server");
    });

    // Set up the playerScores listener
    socket.on("playerScores", (playerScores) => {
      setPlayerScores(playerScores);
    });

    // Cleanup the listeners when the component unmounts
    return () => {
      socket.off("connect");
      socket.off("playerScores");
    };
  }, [socket]); // Empty dependency array ensures this only runs once

  // Handle input changes
  function handleInput(event) {
    let { name, value } = event.target;
    let currentObject = { [name]: value };
    setScore((prev) => ({ ...prev, ...currentObject }));
  }

  // Send scores to the server
  function sendScores() {
    if (!score.name || !score.score) {
      alert("Please fill in all fields");
      return;
    }
    socket.emit("scores", score); // Emit score using socket
  }

  // Render the component
  return (
    <div id="AppContainer">
      <div id="AppTitle">React Multiplayer Dashboard</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendScores();
        }}
      >
        <Input
          name="name"
          handleInput={handleInput}
          placeholder={"Enter your Name"}
        />
        <Input
          name="score"
          handleInput={handleInput}
          placeholder={"Enter your Score"}
        />
        <input value="Send Scores" type="submit" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Player Score</th>
            <th>Player Socket-ID</th>
          </tr>
        </thead>
        <tbody>
          {playerScores.map((player) => (
            <tr key={`${player.name}${Math.floor(Math.random() * 100)}`}>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>{player.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
