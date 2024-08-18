import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { setPets, selectPet, adoptPet } from "../../../store/petSlice";

const AdoptionProcess: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pets = useSelector((state: RootState) => state.pets.pets);
  const selectedPet = useSelector((state: RootState) => state.pets.selectedPet);
  const [step, setStep] = useState<number>(0);
  const [selectedPetType, setSelectedPetType] = useState<string>("");

  useEffect(() => {
    // Simulate fetching pets data
    const fetchedPets = [
      {
        id: "1",
        name: "Max",
        type: "dog",
        breed: "Labrador",
        age: 4,
        color: "black",
        adopted: false,
      },
      {
        id: "2",
        name: "Bella",
        type: "cat",
        breed: "Persian",
        age: 3,
        color: "white",
        adopted: false,
      },
    ];
    dispatch(setPets(fetchedPets));
  }, [dispatch]);

  const handlePetTypeChange = (type: string) => {
    setSelectedPetType(type);
    setStep(1);
  };

  const handlePetSelect = (petId: string) => {
    const pet = pets.find((pet) => pet.id === petId);
    if (pet) {
      dispatch(selectPet(pet));
      setStep(2);
    }
  };

  const handleAdopt = () => {
    if (selectedPet) {
      dispatch(adoptPet(selectedPet.id));
      setStep(3);
    }
  };

  return (
    <div>
      {step === 0 && (
        <div>
          <h1>Select Pet Type</h1>
          <button onClick={() => handlePetTypeChange("dog")}>Dog</button>
          <button onClick={() => handlePetTypeChange("cat")}>Cat</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h1>Select a Pet</h1>
          {pets
            .filter((pet) => pet.type === selectedPetType)
            .map((pet) => (
              <div key={pet.id}>
                <h2>{pet.name}</h2>
                <button onClick={() => handlePetSelect(pet.id)}>Select</button>
              </div>
            ))}
        </div>
      )}

      {step === 2 && selectedPet && (
        <div>
          <h1>Confirm Adoption</h1>
          <p>Name: {selectedPet.name}</p>
          <button onClick={handleAdopt}>Adopt</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Adoption Confirmed</h1>
          <p>Thank you for adopting {selectedPet?.name}!</p>
        </div>
      )}
    </div>
  );
};

export default AdoptionProcess;
