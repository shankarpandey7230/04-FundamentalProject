import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newItem);
    if (!newItem) {
      toast.error("submit some value");
      return;
    }
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
