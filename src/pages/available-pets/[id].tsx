import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function PetDetail() {
  const router = useRouter();
  const { id } = router.query;
  const pets = useSelector((state: RootState) => state.pets.pets);
  const pet = pets.find((pet) => pet.id === id);

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years</p>
      <p>Color: {pet.color}</p>
      <p>Adopted: {pet.adopted ? "Yes" : "No"}</p>
    </div>
  );
}
