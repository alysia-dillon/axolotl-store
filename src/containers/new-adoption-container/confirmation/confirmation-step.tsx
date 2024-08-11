import { usePetContext } from "@deps/contexts/petContext";
import Link from "next/link";

const Confirmation = () => {
  const { selectedPet, selectedPetType } = usePetContext();

  return (
    <div>
      <h2>Thank you for your adoption!</h2>
      <p>
        {selectedPet?.name} is thrilled to have you as their new best friend.
      </p>
      <p>Here's some resources to help you prepare for your new addition:</p>
      <Link href="/resources">
        Preparations for your new {selectedPetType} Checklist
      </Link>
      <Link href="/resources">{selectedPetType} Care Tips</Link>
      {selectedPetType === "dog" ||
        (selectedPetType === "cat" && (
          <Link href="/resources">{selectedPetType} Training</Link>
        ))}
      {selectedPetType === "dog" ||
        (selectedPetType === "cat" && (
          <Link href="">Local {selectedPetType} Boarding and Grooming</Link>
        ))}
    </div>
  );
};

export default Confirmation;
