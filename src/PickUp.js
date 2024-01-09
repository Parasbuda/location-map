import React, { useState } from "react";

const PickUp = ({ stack, setStack, height }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const handlePickup = () => {
    let stackCopy = [...stack];

    const destructurePickupLocation = pickupLocation.split("");
    const first = destructurePickupLocation[0];
    const second = destructurePickupLocation[1];
    const third = destructurePickupLocation[2];
    let locationsToConsider = [];
    for (let i = Number(second); i < Number(height); i++) {
      locationsToConsider.push(
        [...stackCopy].reverse()[first][Number(i)][third]
      );
    }
    const filteredLocationsToConsider = locationsToConsider?.filter(
      (location) => location.occupied !== false
    );

    let filteredLocations = filteredLocationsToConsider?.filter(
      (_, index, arr) => index !== arr.length - 1
    );
    for (let i = 0; i < stackCopy?.length; i++) {
      const parent = stackCopy[i];
      for (let j = 0; j < parent.length; j++) {
        const child = parent[j];
        for (let k = 0; k < child.length; k++) {
          let block = child[k];

          if (
            block?.position ===
            filteredLocationsToConsider[filteredLocationsToConsider?.length - 1]
              ?.position
          ) {
            block.occupied = false;
          } else {
            for (let b = 0; b < filteredLocations?.length; b++) {
              if (filteredLocations[b]?.position === block?.position) {
                block.occupied = true;
              }
            }
          }
        }
      }
    }
    const updatedStack = [...stackCopy];
    setStack(updatedStack);
  };
  return (
    <div className="pickup-container">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <input
          type="text"
          placeholder="Enter pickup location..."
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className=" form-control"
        />
        <br />
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handlePickup}
        >
          Pickup
        </button>
      </div>
    </div>
  );
};

export default PickUp;
