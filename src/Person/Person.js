import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="person">
      <p onClick={props.clicked}>
        Name is {props.name} and age is {props.age}
      </p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default person;
