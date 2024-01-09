import React, { useEffect, useState } from "react";
import "./displayBoxes.css";

const DisplayBoxes = ({ stack }) => {
  console.log(stack, "stack");
  console.log(stack[0]?.[0]?.[0], "sdjhfskjdfh");
  const [totalContainers, setTotalContainers] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [columnCount, setColumnCount] = useState(0);

  console.log(totalContainers, "main");
  console.log(rowCount, "row count");
  console.log(columnCount, "column count");

  useEffect(() => {
    if (stack?.length > 0) {
      setTotalContainers(stack[0]?.length);
      setRowCount(stack[0]?.[0]?.length);
      setColumnCount(stack[0]?.[0]?.[0]);
    }
  }, [stack]);

  return (
    <>
      {stack?.length > 0 ? (
        <div className="display-boxes-wrapper">
          <div className="row m-0 total-container-row">
            {new Array(totalContainers).fill().map((_, index) => {
              return (
                <div
                  className="total-container col-lg-3 col-md-4 col-sm-6 p-0"
                  key={index + 1}
                >
                  {new Array(rowCount).fill().map((_, index) => {
                    return (
                      <div className="row m-0 p-0" key={index + 1}>
                        {columnCount.map((data, index) => {
                          return (
                            <div className="col matrix-cell" key={index + 1}>
                              {data?.position}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="display-boxes-wrapper">No Length</div>
      )}
    </>
  );
};

export default DisplayBoxes;
