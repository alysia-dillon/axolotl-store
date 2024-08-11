// SelectPetType.tsx
import React from "react";
import { usePetContext } from "@deps/contexts/petContext";
import Link from "next/link";

const SelectPetType: React.FC = () => {
  const { setSelectedPetType, goToNext } = usePetContext();

  const handlePetTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPetType(event.target.value);
  };

  return (
    <div>
      <h1>Adopt a Pet</h1>
      <h2>Select Pet Type</h2>
      <form className="py-4 flex flex-col gap-1">
        <label>
          <input
            type="radio"
            name="petType"
            value="dog"
            onChange={handlePetTypeChange}
          />
          Dog
        </label>
        <label>
          <input
            type="radio"
            name="petType"
            value="cat"
            onChange={handlePetTypeChange}
          />
          Cat
        </label>
        <label>
          <input
            type="radio"
            name="petType"
            value="axolotl"
            onChange={handlePetTypeChange}
          />
          Axolotl
        </label>
        <label>
          <input
            type="radio"
            name="petType"
            value="fish"
            onChange={handlePetTypeChange}
          />
          Fish
        </label>
      </form>
    </div>
  );
};

export default SelectPetType;
