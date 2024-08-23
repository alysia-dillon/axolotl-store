import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { Pet, setPets } from '../../store/petSlice';
import { useEffect } from 'react';
import Link from 'next/link';

const AvailablePets = ({ initialPets }: { initialPets: Pet[] }) => {
  const dispatch = useDispatch<AppDispatch>();
  const pets = useSelector((state: RootState) => state.pets.pets);

  useEffect(() => {
    if (initialPets.length > 0) {
      dispatch(setPets(initialPets));
    }
  }, [dispatch, initialPets]);

  if (pets.length === 0) {
    return <div>Loading pets...</div>;
  }

  return (
    <div>
      <h1>Available Pets</h1>
      {pets
        // .filter(pet => !pet.adopted) // Only show non-adopted pets
        .map(pet => (
          <div key={pet.id}>
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Color: {pet.color}</p>
            <p>Age: {pet.age_years} years</p>
            <p>Weight: {pet.weight_kg} kg</p>
            <p>Adopted: {pet.adopted ? "Yes" : "No"}</p>
            <Link href={`/available-pets/${pet.id}`}>View Details</Link>
          </div>
        ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/pets.json'); // Adjust path
  const data = await res.json();

  return {
    props: {
      initialPets: data.adoptablePets,
    },
  };
};

export default AvailablePets;
