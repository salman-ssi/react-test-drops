import React from "react";
import { AddNumbers } from "./components";

const App = () => {
  const handleSum = (num: number) => {
    window.alert(num);
  };

  return (
    <div>
      <h1>React Test Vapors</h1>
      <AddNumbers numbers={[5, 4, 3, 2, 1]} handelSum={handleSum} />
    </div>
  );
};

export default App;
