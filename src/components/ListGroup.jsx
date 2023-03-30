import { useState } from "react";

const ListGroup = ({ cities, heading, onSelectItem }) => {
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.length === 0 && <p>No city found</p>}
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
