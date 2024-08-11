import { usePetContext } from "@deps/contexts/petContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faCat } from "@fortawesome/free-solid-svg-icons/faCat";
import {
  faDove,
  faDragon,
  faFishFins,
  faFrog,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

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
  const {
    selectedPet,
    setSelectedPet,
    selectedPetType,
    currentStepIndex,
    goToPrevious,
  } = usePetContext();

  const handleSelectPet = (pet: Pet) => {
    setSelectedPet(pet);
  };

  let petIcon: any;

  console.log("selectedPetType", selectedPetType);

  switch (selectedPetType) {
    case "dog":
      petIcon = faDog;
      break;
    case "cat":
      petIcon = faCat;
      break;
    case "axolotl":
      petIcon = faDragon;
      break;
    case "fish":
      petIcon = faFishFins;
      break;
    case "reptile":
      petIcon = faFrog;
      break;
    case "bird":
      petIcon = faDove;
      break;
    default:
      petIcon = faPaw;
      break;
  }

  return (
    <div>
      <h2>Select a Pet</h2>
      <ul className="grid grid-cols-2 gap-4">
        {availablePets.map((pet) => (
          <li key={pet.id}>
            <button
              onClick={() => handleSelectPet(pet)}
              className={`w-fit border-2 border-ray-300 p-4 flex gap-4  ${
                selectedPet?.id === pet.id
                  ? "bg-orange-100 border-orange-300 hover:bg-orange-200"
                  : "hover:bg-orange-100"
              }`}
            >
              <FontAwesomeIcon icon={petIcon} height={35} width={35} />
              <span>
                <p className="font-semibold">{pet.name}</p>
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
    </div>
  );
};

export default PetList;
