import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { setPets } from "../../../store/petSlice";

const AvailablePets = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pets = useSelector((state: RootState) => state.pets.pets);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("/pets.json"); // Fetch from the public folder
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Assuming data.adoptablePets is the array you want to use
        dispatch(setPets(data.adoptablePets));
      } catch (error) {
        console.error("Failed to fetch pets:", error);
      }
    };

    fetchPets();
  }, [dispatch]);

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
          <a href={`/available-pets/${pet.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default AvailablePets;
