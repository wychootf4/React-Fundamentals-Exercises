import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    user.numGamesPlayed = 0;
    setUsers([...users, user]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <AddUser users={users} onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
