import { useState } from "react";

const AddMessage = ({ onMessage }) => {
  const [message, setMessage] = useState("");

  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return message === "";
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessage(message);
    setMessage("");
  };
  return (
    <div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={message}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMessage;
