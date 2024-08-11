import React from "react";
import { usePetContext } from "@deps/contexts/petContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

export interface Pet {
  id: string;
  name: string;
  color: string;
  type?: string;
  breed?: string;
  age_years: number;
  weight_kg?: number;
  size_cm?: number;
}

interface PetListProps {
  availablePets: Pet[]; // Expecting an array of pets
  handleContinue: () => void;
}

const PetList = ({ availablePets, handleContinue }: PetListProps) => {
  const { selectedPet, setSelectedPet, selectedPetType } = usePetContext();

  const handleSelectPet = (pet: Pet) => {
    setSelectedPet(pet);
  };

  let petIcon: any;

  switch (selectedPetType) {
    case "dog":
      petIcon = faDog;
      break;
    case "cat":
      petIcon = faCat;
      break;
    case "axolotl":
      petIcon = faDragon;
  }

  return (
    <div>
      <h2>Select a Pet</h2>
      <ul>
        {availablePets.map((pet) => (
          <li key={pet.id}>
            <button
              onClick={() => handleSelectPet(pet)}
              className={`border-2 border-gray-500 p-2 rounded m-2 hover:border-orange-300 flex items-center text-left gap-4 ${
                selectedPet?.id === pet.id
                  ? "bg-orange-100 border-orange-300"
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={petIcon} height={35} width={35} />
              <span>
                <p>{pet.name}</p>
                <p>
                  {pet.breed || pet.type} | {pet.color}
                </p>
                <p>
                  {pet.age_years} years old | {pet.weight_kg} kg
                </p>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleContinue}
        className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Continue
      </button>
    </div>
  );
};

export default PetList;
