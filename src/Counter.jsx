import React from "react";
import "./Counter.css";
import Button from "./Button";
import { useState } from "react";

function Counter(props) {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <>
      <div className="card">
        <div className="d-flex">
          <Button
            name={"-"}
            handleClick={() => {
              setCounterValue((counter) => counter - 1);
            }}
          ></Button>
          <span>{counterValue}</span>
          <Button
            name={"+"}
            handleClick={() => {
              setCounterValue((counter) => counter + 1);
            }}
          ></Button>
        </div>
        <div className="reset">
          <Button
            name={"Reset"}
            handleClick={() => {
              setCounterValue(0);
            }}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default Counter;
