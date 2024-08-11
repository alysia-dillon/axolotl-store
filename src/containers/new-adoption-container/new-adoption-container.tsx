import React, { useEffect } from "react";
import { usePetContext } from "@deps/contexts/petContext";
import SelectPetType from "@deps/containers/new-adoption-container/select-pet-type/select-pet-type";
import PetList from "@deps/containers/new-adoption-container/availablePets/petList";
import StartAdoption from "@deps/containers/new-adoption-container/selected-pet/start-adoption";
import PaymentInfo from "@deps/containers/new-adoption-container/payment/payment-step";
import Summary from "@deps/containers/new-adoption-container/summary/summary-step";
import Confirmation from "./confirmation/confirmation-step";
import dogsData from "@deps/queries/dummy-data/dogs.json";
import catsData from "@deps/queries/dummy-data/cats.json";
import axolotlsData from "@deps/queries/dummy-data/axolotls.json";
import WorkflowCard from "@deps/components/workflowCard/workflowCard"; // Adjust the path accordingly

// Define an interface for the step component
interface StepComponent {
  component: React.ReactNode;
  title: string;
  subtitle?: string;
}

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
    }
  }, [selectedPetType, setPets]);

  // Define the type for stepComponents to include numeric index signature
  const stepComponents: { [key: number]: StepComponent } = {
    0: {
      component: <SelectPetType />,
      title: "Adopt a pet",
      subtitle: "Select a type of pet",
    },
    1: {
      component: <PetList availablePets={pets} handleContinue={goToNext} />,
      title: "Select Your Pet",
    },
    2: { component: <StartAdoption />, title: "Start Adoption" },
    3: { component: <PaymentInfo />, title: "Payment Information" },
    4: { component: <Summary />, title: "Summary" },
    5: { component: <Confirmation />, title: "Confirmation" },
  };

  const { component, title } = stepComponents[currentStepIndex] || {
    component: <div>Step not found.</div>,
    title: "",
  };
  const getFooterContent = () => {
    if (currentStepIndex < 6) {
      return (
        <>
          {currentStepIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="bg-orange-500 text-white p-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          )}
          {currentStepIndex < 6 && (
            <button
              onClick={goToNext}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Continue
            </button>
          )}
        </>
      );
    }
    return <></>; // Return an empty JSX element instead of null
  };

  return (
    <div>
      <WorkflowCard title={title} footerContent={getFooterContent()}>
        {component}
      </WorkflowCard>
    </div>
  );
};

export default AdoptionProcess;
