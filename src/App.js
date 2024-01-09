import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayBoxes from "./DisplayBoxes";

function App() {
  const [size, setSize] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [stack, setStack] = useState([]);
  const [limit, setLimit] = useState(0);
  const [dropNo, setDropNo] = useState("");

  const generateStack = () => {
    const destructureSize = size.split("*");
    const destructureLength = destructureSize[0];
    const destructureHeight = destructureSize[1];
    const destructureWidth = destructureSize[2];
    setLength(destructureLength);
    setHeight(destructureHeight);
    setWidth(destructureWidth);
    let array = [];
    for (let i = 0; i < destructureWidth; i++) {
      let array1 = [];
      for (let j = 0; j < destructureLength; j++) {
        let array2 = [];
        for (let k = 0; k < destructureHeight; k++) {
          array2.push({ position: `${i}${j}${k}`, occupied: false });
        }
        array1.unshift(array2);
      }
      array.unshift(array1);
    }
    setStack([...stack, array]);
    setLimit(destructureLength * destructureHeight * destructureWidth);
  };

  const dropBoxes = () => {
    if (Number(dropNo) > limit) {
      window.alert("Too many boxes to drop in this stack");
    } else {
      let droppedNo = 0;
      console.log(stack, "stack");
      let reversedStack = stack.reverse();
      console.log(reversedStack, "reverse");
      if (Number(droppedNo) < Number(dropNo)) {
        for (let i = 0; i < reversedStack.length; i++) {
          if (Number(droppedNo) < Number(dropNo)) {
            const parent = reversedStack[i];
            for (let j = 0; j < parent.length; j++) {
              if (Number(droppedNo) < Number(dropNo)) {
                const child = parent[j];
                for (let k = 0; k < child.length; k++) {
                  const grandChild = child[k];
                  if (Number(droppedNo) < Number(dropNo)) {
                    for (let l = 0; l < grandChild.length; l++) {
                      if (Number(droppedNo) < Number(dropNo)) {
                        let block = grandChild[l];
                        if (block.occupied === false) {
                          droppedNo = droppedNo + 1;
                          block.occupied = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // console.log(reversedStack, "before");
      // const finalReverse = reversedStack.reverse();
      // console.log(finalReverse, "after");
      // setStack(finalReverse);
    }
  };

  return (
    <div className="App">
      <div>
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
        <button type="button" onClick={() => generateStack()}>
          Save
        </button>
      </div>

      <br />
      <DisplayBoxes stack={stack} />
      <div>
        <h1>Drop Box</h1>
        <label htmlFor="size">Number of boxes to drop</label>
        <br />
        <input
          type="text"
          value={dropNo}
          style={{ width: "13%", marginTop: "5px", marginBottom: "5px" }}
          onChange={(e) => setDropNo(e.target.value)}
          placeholder="No of boxes"
        />
        <br />
        <button type="button" onClick={() => dropBoxes()}>
          Save
        </button>
      </div>

     
    </div>
  );
}

export default App;
