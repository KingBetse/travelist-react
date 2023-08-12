import { useEffect, useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Phone", quantity: 1, packed: false },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};
const Logo = () => {
  return <h1>Travelist</h1>;
};
const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your trip</p>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="item..."
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
};
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Item items={items} key={items} />
        ))}

        {/* <div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button>Clear</button>
        </div> */}
      </ul>
    </div>
  );
};
const Item = ({ items }) => {
  const [check, setChecked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const deleteItem = () => {
    setIsDelete(!isDelete);
  };
  const handleCheck = () => {
    setChecked(!check);
  };

  return isDelete ? (
    ""
  ) : (
    <li>
      <input type="checkbox" onChange={handleCheck} />
      <p style={check ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </p>

      <button
        style={{ color: "red" }}
        onClick={() => {
          deleteItem();
        }}
      >
        X
      </button>
    </li>
  );
};
const Stats = () => {
  const [itemNum, setitemNum] = useState(0);
  useEffect(() => {
    num();
  });
  const num = () => {
    const x = initialItems.length;
    setitemNum(x);
  };

  return (
    <footer className="stats">
      <em> you have {itemNum} items on your list, and you already Packed X%</em>
    </footer>
  );
};

export default App;
