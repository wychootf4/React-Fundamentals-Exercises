import { useState } from "react";

const CreateNewItem = ({ onAddItem }) => {
  const [value, setValue] = useState("");
  const inputIsEmpty = () => value === "";

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    onAddItem(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    </div>
  );
};

export default CreateNewItem;
