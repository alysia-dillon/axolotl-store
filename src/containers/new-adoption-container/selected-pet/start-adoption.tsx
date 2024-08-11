// ConfirmAdoption.tsx
import React from "react";
import { usePetContext } from "@deps/contexts/petContext";

const ConfirmAdoption = () => {
  const { selectedPet, goToNext } = usePetContext();

  const handleConfirm = () => {
    goToNext();
  };

  if (!selectedPet) {
    return (
      <p>
        No pet selected. Please go back and select a pet or cancel adoption
        process.
      </p>
    );
  }

  let fee;

  if (selectedPet.age_years < 1) {
    fee = 250;
  } else if (selectedPet.age_years < 3) {
    fee = 175;
  } else if (selectedPet.age_years < 6) {
    fee = 125;
  }

  return (
    <div>
      <h2>Confirm Pet To Adopt</h2>
      <p>Pet: {selectedPet.name}</p>
      <p>Fee: ${fee}</p>
      <p>Press continue to start adoption process for {selectedPet.name}</p>
      <button onClick={handleConfirm}>Continue</button>
    </div>
  );
};

export default ConfirmAdoption;
