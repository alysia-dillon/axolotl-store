// summary-step.tsx
import React from "react";
import { usePetContext } from "@deps/contexts/petContext";

const SummaryStep = () => {
  const { selectedPet, selectedPaymentMethod } = usePetContext();
  const adoptionFee = 100; // Example fixed fee

  if (!selectedPet || !selectedPaymentMethod) {
    return <div>No pet selected or payment method not chosen.</div>;
  }

  return (
    <div>
      <h2>Adoption Summary</h2>
      <div>
        <h3>Selected Pet</h3>
        <p>Name: {selectedPet.name}</p>
        <p>Type: {selectedPet.breed || "Unknown"}</p>
        <p>Age: {selectedPet.age_years} years</p>
      </div>
      <div>
        <h3>Adoption Fee</h3>
        <p>${adoptionFee}</p>
      </div>
      <div>
        <h3>Payment Method</h3>
        <p>
          {selectedPaymentMethod.type}: {selectedPaymentMethod.details}
        </p>
      </div>
    </div>
  );
};

export default SummaryStep;
