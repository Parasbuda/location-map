import React, { useCallback, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DisplayBoxes from "./DisplayBoxes";
import PickUp from "./PickUp";

function App() {
  const [size, setSize] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [stack, setStack] = useState([]);
  const [limit, setLimit] = useState(0);
  const [dropNo, setDropNo] = useState("");

  const generateStack = useCallback(() => {
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
        array1.push(array2);
      }
      array.unshift(array1);
    }
    setStack(array);
    setLimit(destructureLength * destructureHeight * destructureWidth);
  }, [size]);

  const dropBoxes = useCallback(() => {
    let droppedNo = 0;
    let reversedStack = stack.reverse();
    if (Number(dropNo) > limit) {
      window.alert("Too many boxes to drop in this stack");
    } else {
      if (Number(droppedNo) < Number(dropNo)) {
        for (let i = 0; i < reversedStack?.length; i++) {
          if (Number(droppedNo) < Number(dropNo)) {
            const parent = reversedStack[i];
            for (let j = 0; j < parent.length; j++) {
              if (Number(droppedNo) < Number(dropNo)) {
                const child = parent[j];
                for (let k = 0; k < child.length; k++) {
                  if (Number(droppedNo) < Number(dropNo)) {
                    let block = child[k];
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
    const finalStack = [...reversedStack]?.reverse();
    setStack(finalStack);
    setLimit(limit - Number(droppedNo));
  }, [stack, dropNo]);

  return (
    <div className="App row p-0">
      <div className="col-4">
        <h1>Location Mapping</h1>
        <label htmlFor="size">Dimension of the Stack</label>
        <br />
        <input
          type="text"
          value={size}
          className="form-control"
          style={{ marginTop: "5px", marginBottom: "5px" }}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Enter the Length,Height,Width,(L*H*W)"
        />
        <br />
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={generateStack}
        >
          Save
        </button>
      </div>
      <div className="col-4">
        <h1>Drop Box</h1>
        <label htmlFor="size">Number of boxes to drop</label>
        <br />
        <input
          type="text"
          value={dropNo}
          className="form-control"
          style={{ marginTop: "5px", marginBottom: "5px" }}
          onChange={(e) => setDropNo(e.target.value)}
          placeholder="No of boxes"
        />
        <br />
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={() => dropBoxes()}
        >
          Save
        </button>
      </div>
      <div className="col-4">
        <h1>Pickup Box</h1>
        <label htmlFor="size">Location Of box</label>
        <br />
        <PickUp stack={stack} setStack={setStack} height={height} />
      </div>
      <div className="col-12 mt-4">
        <DisplayBoxes stack={stack} />
      </div>
    </div>
  );
}

export default App;
