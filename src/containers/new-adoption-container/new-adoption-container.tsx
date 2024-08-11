import React, { useEffect } from "react";
import { usePetContext } from "@deps/contexts/petContext";
import SelectPetType from "@deps/containers/new-adoption-container/select-pet-type/select-pet-type";
import PetList from "@deps/containers/new-adoption-container/availablePets/petList";
import StartAdoption from "@deps/containers/new-adoption-container/selected-pet/start-adoption";
import PaymentInfo from "@deps/containers/new-adoption-container/payment/payment-step";
import Summary from "@deps/containers/new-adoption-container/summary/summary-step";
import dogsData from "@deps/queries/dummy-data/dogs.json";
import catsData from "@deps/queries/dummy-data/cats.json";
import axolotlsData from "@deps/queries/dummy-data/axolotls.json";
import Confirmation from "./confirmation/confirmation-step";

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
      case 4:
        return <Summary />;
      case 5:
        return <Confirmation />;
      // default:
      //   return <SelectPetType />;
    }
  };

  return (
    <div>
      <section className="max-w-10 flex justify-center border-3 border-gray-500">
        {renderStep()}
      </section>
    </div>
  );
};

export default AdoptionProcess;
