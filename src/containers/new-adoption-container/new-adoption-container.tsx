import React, { useEffect } from "react";
import { usePetContext } from "@deps/contexts/petContext";
import SelectPetType from "@deps/containers/new-adoption-container/select-pet-type/select-pet-type";
import PetList from "@deps/containers/new-adoption-container/availablePets/petList";
import StartAdoption from "@deps/containers/new-adoption-container/selected-pet/start-adoption";
import PaymentInfo from "@deps/containers/new-adoption-container/payment/payment-step";
import Link from "next/link";
import dogsData from "@deps/queries/dummy-data/dogs.json";
import catsData from "@deps/queries/dummy-data/cats.json";
import axolotlsData from "@deps/queries/dummy-data/axolotls.json";

const AdoptionProcess = () => {
  const {
    currentStepIndex,
    goToNext,
    goToPrevious,
    isAdopted,
    selectedPet,
    selectedPetType,
    pets,
    setPets,
  } = usePetContext();

  useEffect(() => {
    // Set pets based on the selectedPetType
    if (selectedPetType === "dog") {
      setPets(dogsData);
    } else if (selectedPetType === "cat") {
      setPets(catsData);
    } else if (selectedPetType === "axolotl") {
      setPets(axolotlsData);
    } else {
      setPets([]); // Clear pets if no type selected
    }
  }, [selectedPetType, setPets]);

  const renderStep = () => {
    switch (currentStepIndex) {
      case 0:
        return <SelectPetType />;
      case 1:
        return <PetList availablePets={pets} handleContinue={goToNext} />;
      case 2:
        return <StartAdoption />;
      case 3:
        return <PaymentInfo />;
      // case 4:
      //   return <Summary />;
      // default:
      //   return <SelectPetType />;
    }
  };

  return (
    <div>
      {renderStep()}
      {/* default navigation below while under construction */}
      {currentStepIndex > 0 && <button onClick={goToPrevious}>Back</button>}
      {currentStepIndex < (selectedPet ? 3 : 0) && (
        <button onClick={goToNext}>Next</button>
      )}
      <Link href="/available-pets">Cancel Adoption</Link>
    </div>
  );
};

export default AdoptionProcess;
