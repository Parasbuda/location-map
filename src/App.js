import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayBoxes from "./DisplayBoxes";

function App() {
  const [size, setSize] = useState("");
  const [stack, setStack] = useState([]);
  const [limit, setLimit] = useState(0);

  const generateStack = () => {
    const destructureSize = size.split("*");
    const length = destructureSize[0];
    const height = destructureSize[1];
    const width = destructureSize[2];
    let array = [];
    for (let i = 0; i < width; i++) {
      let array1 = [];
      for (let j = 0; j < length; j++) {
        let array2 = [];
        for (let k = 0; k < height; k++) {
          array2.push({ position: `${i}${j}${k}`, occupied: false });
        }
        array1.push(array2);
      }
      array.push(array1);
    }
    setStack([...stack, array]);
    setLimit(length * height * width);
  };

  return (
    <div className="App">
      <h1>Location Mapping</h1>
      <label htmlFor="size">Dimension of the Stack</label>
      <br />
      <input
        type="text"
        value={size}
        style={{ width: "13%", marginTop: "5px", marginBottom: "5px" }}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Enter the Length,Height,Width,(L*H*W)"
      />
      <br />
      <button type="button" onClick={generateStack}>
        Save
      </button>

      <br />
      <DisplayBoxes stack={stack} />
    </div>
  );
}

export default App;
