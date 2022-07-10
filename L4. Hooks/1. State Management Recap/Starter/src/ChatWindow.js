import AddMessage from "./AddMessage";
import MessageHistory from "./MessageHistory";

const ChatWindow = ({ user, messages, onMessage }) => {
  const handleOnMessage = (message) => {
    onMessage(user.username, message);
  };
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
      <MessageHistory user={user} messages={messages} />
      <AddMessage onMessage={handleOnMessage} />
    </div>
  );
};

export default ChatWindow;
