// PetAdopt.tsx
import React from "react";
import { usePetContext } from "@deps/contexts/petContext";

const PetAdopt: React.FC = () => {
  const { selectedPet, adoptPet, bankAccountBalance } = usePetContext();

  const handleAdopt = () => {
    if (adoptPet()) {
      alert("Pet adopted successfully!");
    } else {
      alert("Failed to adopt pet. Check your balance or select a pet.");
    }
  };

  return (
    <div>
      <h2>Adopt a Pet</h2>
      {selectedPet ? (
        <div>
          <h3>{selectedPet.name}</h3>
          <p>Type: {selectedPet.type}</p>
          <p>Color: {selectedPet.color}</p>
          <p>Size: {selectedPet.size_cm} cm</p>
          <p>Age: {selectedPet.age_years} years</p>
          <p>Balance: ${bankAccountBalance}</p>
          <button onClick={handleAdopt}>Adopt</button>
        </div>
      ) : (
        <p>No pet selected. Please select a pet first.</p>
      )}
    </div>
  );
};

export default PetAdopt;
