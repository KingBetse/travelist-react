import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, deleteItem, handleCheck, clearList }) => {
  const [sortby, setSortby] = useState("input");
  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            items={items}
            key={items}
            deleteItem={deleteItem}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>

        <button onClick={clearList}>Clear the list</button>
      </div>
    </div>
  );
};

export default PackingList;
