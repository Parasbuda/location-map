import React, { useEffect, useState } from "react";
import "./displayBoxes.css";

const DisplayBoxes = ({ data }) => {
  console.log(data, "data");
  const [totalContainers, setTotalContainers] = useState([]);
  useEffect(() => {
    setTotalContainers(data[0] ? data[0] : []);
  }, [data]);
  return (
    <>
      {data?.length > 0 ? (
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
