import menu from "./data";
import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// // console.log(tempSet);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  // console.log(categories);
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
