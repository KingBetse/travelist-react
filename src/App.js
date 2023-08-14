import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Phone", quantity: 1, packed: false },
// ];

const App = () => {
  const [items, setItems] = useState([]);
  const handleItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleCheck = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = () => {
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        handleCheck={handleCheck}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
