import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {
  const [messages, setMessages] = useState([]);

  const onMessage = (username, text) => {
    const newMessage = {
      username: username,
      text: text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => {
          return (
            <ChatWindow
              key={user.username}
              user={user}
              messages={messages}
              onMessage={onMessage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
