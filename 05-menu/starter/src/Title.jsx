import React, { useState } from "react";
import menu from "./data";

const Title = ({ text }) => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <div className="title">
      <h2>{text || "Default Title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
