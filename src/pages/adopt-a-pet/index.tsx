import { PetProvider } from "@deps/contexts/petContext";
import AdoptionProcess from "@deps/containers/new-adoption-container/new-adoption-container";

const AdoptAPet = () => {
  return (
    <PetProvider>
      <AdoptionProcess />
    </PetProvider>
  );
};

export default AdoptAPet;
