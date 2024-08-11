import { usePetContext } from "@deps/contexts/petContext";
import Link from "next/link";

const ConfirmAdoption = () => {
  const { selectedPet, goToNext, goToPrevious, currentStepIndex } =
    usePetContext();

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
    </div>
  );
};

export default ConfirmAdoption;
