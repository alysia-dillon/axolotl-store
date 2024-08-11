import { usePetContext } from "@deps/contexts/petContext";

const SummaryStep = () => {
  const { selectedPet, selectedPaymentMethod, selectedPetType, goToNext } =
    usePetContext();
  const adoptionFee = 100; // Example fixed fee

  if (!selectedPet || !selectedPaymentMethod) {
    return <div>No pet selected or payment method not chosen.</div>;
  }

  return (
    <div>
      <h2>Adoption Summary</h2>
      <div>
        <p>
          <strong>Name:</strong> {selectedPet.name}
        </p>
        <p>
          <strong>Pet Type:</strong> {selectedPetType}
        </p>
        <p>
          <strong>Breed:</strong> {selectedPet.breed}
        </p>
        <p>
          <strong>Age:</strong> {selectedPet.age_years} years
        </p>
      </div>
      <div>
        <h3>Adoption Fee</h3>
        <p>${adoptionFee}</p>
      </div>
      <div>
        <h3>Payment Method</h3>
        <p>
          {selectedPaymentMethod.type}: {selectedPaymentMethod.details}
        </p>
      </div>
      <button
        onClick={goToNext}
        className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Submit Adoption
      </button>
    </div>
  );
};

export default SummaryStep;
