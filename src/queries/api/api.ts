// api.ts
import client from "./axiosClient"; // Adjust the import path as necessary
import { AxolotlResponse, AxolotlErrorResponse } from "@deps/models/types"; // Adjust the import path as necessary
import { AxiosResponse } from "axios";

const baseUrl = `http://axolotlstore.example.com/v1`; // Replace with your actual API URL

export const getAxolotls = async (): Promise<
  AxolotlResponse | AxolotlErrorResponse
> => {
  try {
    const { data } = await client.get<AxolotlResponse>(`${baseUrl}/axolotls`);

    return data;
  } catch (error: any) {
    console.error(
      "getAxolotls::An error occurred while fetching axolotl data",
      error
    );
    return error.response?.data || { error: "Unknown error occurred" };
  }
};
