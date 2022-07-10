import { useState } from "react";

const AddUser = ({ users, onAddUser }) => {
  const [userExists, setUserExists] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const checkUserExists = (currUsername) => {
    for (let user of users) {
      if (user.userName === currUsername) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userAlreadyExists = checkUserExists(user.userName);

    if (!!!userAlreadyExists) {
      onAddUser(user);
    }
    setUserExists(userAlreadyExists);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const isDisabled = () => {
    const { firstName, lastName, userName } = user;
    return firstName === "" || lastName === "" || userName === "";
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            placeholder="Please enter first name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            placeholder="Please enter last name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="userName"
            value={user.userName}
            placeholder="Please enter user name"
            onChange={handleInputChange}
          />
        </div>
        <button disabled={isDisabled()}>Add</button>
      </form>
      {userExists && <p>You cannot add an user that already exists.</p>}
    </div>
  );
};

export default AddUser;
