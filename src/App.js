import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>Study app</h1>
      Username
      <input value={username} onChange={handleUsernameChange}></input>
      <br />
      Password
      <input value={password} onChange={handlePasswordChange}></input>
    </div>
  );
};

export default App;
