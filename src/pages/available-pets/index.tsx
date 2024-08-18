// src/pages/available-pets/index.tsx
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
// import { setPets } from "../../../store/petSlice";
import Link from "next/link";

const AvailablePets = () => {
  const pets = useSelector((state: RootState) => state.pets.pets);

  if (pets.length === 0) {
    return <div>Loading pets...</div>;
  }

  return (
    <div>
      <h1>Available Pets</h1>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <p>Breed: {pet.breed}</p>
          <p>Color: {pet.color}</p>
          <p>Age: {pet.age_years} years</p>
          <p>Weight: {pet.weight_kg} kg</p>
          <p>Adopted: {pet.adopted ? "Yes" : "No"}</p>
          <Link href={`/available-pets/${pet.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AvailablePets;
