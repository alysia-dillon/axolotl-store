// PetContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Pet {
  id: string;
  name: string;
  color: string;
  breed?: string;
  age_years: number;
  weight_kg?: number;
}

interface PaymentOption {
  id: string;
  type: string;
  details: string;
}

interface PetContextType {
  selectedPet: Pet | null;
  setSelectedPet: (pet: Pet) => void;
  selectedPetType: string | null;
  setSelectedPetType: (petType: string) => void;
  pets: Pet[];
  setPets: (pets: Pet[]) => void;
  currentStepIndex: number;
  goToNext: () => void;
  goToPrevious: () => void;
  isAdopted: boolean;
  paymentOptions: PaymentOption[] | string;
  setSelectedPaymentMethod: (paymentOption: PaymentOption) => void;
  selectedPaymentMethod: PaymentOption | null;
  addPaymentOption: (paymentOption: PaymentOption) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [selectedPetType, setSelectedPetType] = useState<string | null>(null);
  const [pets, setPets] = useState<Pet[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isAdopted, setIsAdopted] = useState<boolean>(false);
  const [paymentOptions, setPaymentOptions] = useState<PaymentOption[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentOption | null>(null);

  const goToNext = () => setCurrentStepIndex((prev) => prev + 1);
  const goToPrevious = () => setCurrentStepIndex((prev) => prev - 1);

  const addPaymentOption = (paymentOption: PaymentOption) => {
    setPaymentOptions((prev) => [...prev, paymentOption]);
  };

  return (
    <PetContext.Provider
      value={{
        selectedPet,
        setSelectedPet,
        selectedPetType,
        setSelectedPetType,
        pets,
        setPets,
        currentStepIndex,
        goToNext,
        goToPrevious,
        isAdopted,
        paymentOptions,
        setSelectedPaymentMethod,
        selectedPaymentMethod,
        addPaymentOption,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => {
  const context = useContext(PetContext);
  if (context === undefined) {
    throw new Error("usePetContext must be used within a PetProvider");
  }
  return context;
};
