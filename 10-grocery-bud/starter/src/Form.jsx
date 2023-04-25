import { useState } from "react";

const Form = () => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
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
