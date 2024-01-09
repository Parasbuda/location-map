import React from "react";
import "./displayBoxes.css";

const DisplayBoxes = ({ stack }) => {
  return (
    <>
      <div className="display-boxes-wrapper">
        <div className="row m-0 total-container-row">
          {stack?.map((parent, index) => {
            return (
              <div
                className="total-container col-lg-3 col-md-4 col-sm-6 p-0"
                key={index + 1}
              >
                <>
                  <h4>{index}</h4>
                  {[...parent].reverse()?.map((child, index) => {
                    return (
                      <div className="row m-0 p-0" key={index + 1}>
                        {child?.map((column, index) => {
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
    </>
  );
};

export default DisplayBoxes;
