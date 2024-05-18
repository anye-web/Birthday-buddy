import { useState } from "react";
import data from "../data";

export const Person = () => {
  const [people, setPeople] = useState(data);
  const clearAllItem = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h3>5 Birthdays Today</h3>
      {people.map((info) => {
        return (
          <div className="person" key={info.id}>
            <img src={info.image} alt="" />
            <div>
              <h4>{info.name}</h4>
              <p>{info.age} years</p>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={clearAllItem}>
        Clear All
      </button>
    </div>
  );
};

export default Person;
