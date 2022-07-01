import "./App.css";
import Counter from "./Counter";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [counterNumbers, setCounterNumbers] = useState(0);
  const getCounters = () => {
    return Array(counterNumbers).fill(<Counter></Counter>);
  };
  return (
    <>
      <div className="plus">
        <Button
          name="+"
          className={"topRightAddCounterBtn"}
          handleClick={() => {
            setCounterNumbers((counterNumbers) => counterNumbers + 1);
          }}
        ></Button>
      </div>

      <div className="container">{getCounters()}</div>
    </>
  );
}

export default App;
