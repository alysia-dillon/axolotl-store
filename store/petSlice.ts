import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Pet {
  age_years?: string;
  weight_kg?: string;
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  color: string;
  adopted: boolean;
  image_url?: string;
}

interface PetState {
  pets: Pet[];
  selectedPet: Pet | null;
}

const initialState: PetState = {
  pets: [],
  selectedPet: null,
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets(state, action: PayloadAction<Pet[]>) {
      state.pets = action.payload;
    },
    selectPet(state, action: PayloadAction<Pet>) {
      state.selectedPet = action.payload;
    },
    adoptPet(state, action: PayloadAction<string>) {
      const petId = action.payload;
      const pet = state.pets.find((pet) => pet.id === petId);
      if (pet) {
        pet.adopted = true;
        state.selectedPet = null;
      }
    },
  },
});

export const { setPets, selectPet, adoptPet } = petSlice.actions;
export default petSlice.reducer;
