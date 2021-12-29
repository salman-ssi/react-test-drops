import React, { useEffect } from "react";

interface IAddNumbers {
  numbers: number[];
  handelSum: Function;
}

const AddNumbers = ({ numbers, handelSum }: IAddNumbers) => {
  useEffect(() => {
    handelSum(numbers.reduce((a, b) => a + b, 0));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {numbers.map((n: number, index: number) => (
        <div key={n} style={{ display: "flex" }}>
          <h3>{n}</h3>
          {index < numbers.length - 1 && <h3> + </h3>}
        </div>
      ))}
    </div>
  );
};

export default AddNumbers;
