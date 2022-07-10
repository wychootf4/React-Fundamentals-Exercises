const DeleteLastItem = ({ onDeleteLastItem, buttonDisabled }) => {
  const handleDeleteLastItem = (event) => {
    onDeleteLastItem();
  };
  return (
    <div>
      <button onClick={handleDeleteLastItem} disabled={buttonDisabled}>
        Delete Last Item
      </button>
    </div>
  );
};

export default DeleteLastItem;
