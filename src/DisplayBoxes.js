import React, { useEffect, useState } from "react";
import "./displayBoxes.css";

const DisplayBoxes = ({ stack }) => {
<<<<<<< HEAD
  const [totalContainers, setTotalContainers] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [columnCount, setColumnCount] = useState(0);
=======
  const [totalContainers, setTotalContainers] = useState([]);
>>>>>>> dd7e723ba1df9909c2f00ba0a406504ca61201dd

  useEffect(() => {
    if (stack?.length > 0) {
      setTotalContainers(stack[0]);
    }
  }, [stack]);
  return (
    <>
      {stack?.length > 0 ? (
        <div className="display-boxes-wrapper">
          <div className="row m-0 total-container-row">
            {totalContainers.map((container, index) => {
              return (
                <div
                  className="total-container col-lg-3 col-md-4 col-sm-6 p-0"
                  key={index + 1}
                >
                  <>
                    <h4>{index}</h4>
                    {container?.map((row, index) => {
                      return (
                        <div className="row m-0 p-0" key={index + 1}>
                          {row?.map((column, index) => {
                            return (
                              <div
                                className={
                                  column?.occupied
                                    ? "col matrix-cell occupied"
                                    : "col matrix-cell"
                                }
                                key={index + 1}
                              >
                                {column?.position}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
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
