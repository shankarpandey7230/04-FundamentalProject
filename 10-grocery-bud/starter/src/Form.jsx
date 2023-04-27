import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newItem);
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button className="btn" type="submit">
          {" "}
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
