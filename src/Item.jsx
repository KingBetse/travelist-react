const Item = ({ items, deleteItem, handleCheck }) => {
  // const [check, setChecked] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => {
          handleCheck(items.id);
        }}
      />

      <p style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </p>

      <button
        style={{ color: "red" }}
        onClick={() => {
          deleteItem(items.id);
        }}
      >
        X
      </button>
    </li>
  );
};

export default Item;
