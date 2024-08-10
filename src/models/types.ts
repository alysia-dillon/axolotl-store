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

export interface AxolotlErrorResponse {
  error: string;
}
