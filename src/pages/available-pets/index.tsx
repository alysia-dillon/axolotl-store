import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Link from "next/link";

export default function AvailablePets() {
  const pets = useSelector((state: RootState) => state.pets.pets);

  return (
    <div>
      <h1>Available Pets</h1>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <p>Type: {pet.type}</p>
          <p>Breed: {pet.breed}</p>
          <p>Adopted: {pet.adopted ? "Yes" : "No"}</p>
          <Link href={`/pets/${pet.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
