// pages/index.tsx
import { Axolotl, AxolotlResponse } from "@deps/models/types";
import petStoreData from "@deps/queries/dummy-data/axolotl-store.json";

const Home = () => {
  // Type assertion to let TypeScript know the shape of the data
  const data = petStoreData as AxolotlResponse;

  return (
    <div>
      <h1>Axolotl Store</h1>
      <ul>
        {data.axolotls.map((axolotl: Axolotl) => (
          <li key={axolotl.id}>
            <strong>Name:</strong> {axolotl.name}
            <br />
            <strong>Color:</strong> {axolotl.color}
            <br />
            <strong>Type:</strong> {axolotl.type}
            <br />
            <strong>Size:</strong> {axolotl.size_cm} cm
            <br />
            <strong>Age:</strong> {axolotl.age_years} years
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
