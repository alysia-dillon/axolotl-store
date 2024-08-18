// src/pages/available-pets/[id].tsx
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const PetDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const pets = useSelector((state: RootState) => state.pets.pets);

  console.log("Current pets in state:", pets); // Log the state pets
  console.log("Pet ID from query:", id); // Log the ID from the query

  const pet = pets.find((pet) => pet.id === (id as string));

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age_years} years</p>
      <p>Color: {pet.color}</p>
      <p>Weight: {pet.weight_kg} kg</p>
      <p>Adopted: {pet.adopted ? "Yes" : "No"}</p>
    </div>
  );
};

export default PetDetail;
