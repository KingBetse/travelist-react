import { useEffect, useState } from "react";

const Stats = ({ items }) => {
  const [itemNum, setitemNum] = useState(0);
  const numPacked = items.filter((items) => items.packed).length;
  console.log(numPacked);
  console.log(items.packed);
  const percentage = Math.round((numPacked / itemNum) * 100);
  useEffect(() => {
    num();
  });
  const num = () => {
    const x = items.length;
    setitemNum(x);
  };

  return (
    <footer className="stats">
      <em>
        {" "}
        {itemNum === 0
          ? "you can start adding things"
          : percentage === 100
          ? "you are ready to go"
          : `you have ${itemNum} items on your list, and you already Packed 
          ${numPacked} (
         ${itemNum ? percentage : 0}%)`}
      </em>
    </footer>
  );
};
export default Stats;
