// types.ts
export interface Axolotl {
  id: string;
  name: string;
  color: string;
  type: string;
  size_cm: number;
  age_years: number;
}

export interface AxolotlResponse {
  axolotls: Axolotl[];
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  color: string;
  age_years: number;
  weight_kg: number;
}

export interface DogStoreData {
  dogs: Dog[];
}

export interface Cat {
  id: string;
  name: string;
  color: string;
  breed: string;
  age_years: number;
  weight_kg: number;
}

export interface CatStoreData {
  cats: Cat[];
}

export interface FreshWaterFish {
  id: string;
  name: string;
  color: string;
  species: string;
  age_years: number;
  size_cm: number;
}

export interface FreshWaterFishStoreData {
  fish: FreshWaterFish[];
}

export interface SaltWaterFish {
  id: string;
  name: string;
  color: string;
  species: string;
  age_years: number;
  size_cm: number;
}

export interface SaltWaterFishStoreData {
  fish: SaltWaterFish[];
}
