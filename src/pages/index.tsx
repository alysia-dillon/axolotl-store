// pages/index.tsx
import { DEFAULT_PAGE_TITLE } from "@deps/constants/page-title";
import { Axolotl, Cat, Dog } from "@deps/models/types";
import axolotls from "@deps/queries/dummy-data/axolotls.json";
import dogs from "@deps/queries/dummy-data/dogs.json";
import cats from "@deps/queries/dummy-data/cats.json";

const Home = () => {
  // Type assertion to let TypeScript know the shape of the data
  const availableAxolotls = axolotls;
  const availableDogs = dogs;
  const availableCats = cats;

  return (
    <div>
      <h1>Welcome to {DEFAULT_PAGE_TITLE}</h1>
      <section>
        <h2>Axolotls</h2>
        <ul>
          {availableAxolotls.axolotls.map((axolotl: Axolotl) => (
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
      </section>
      <section>
        <h2>Dogs</h2>
        <ul>
          {availableDogs.dogs.map((dog: Dog) => (
            <li key={dog.id}>
              <strong>Name:</strong> {dog.name}
              <br />
              <strong>Color:</strong> {dog.breed}
              <br />
              <strong>Type:</strong> {dog.color}
              <br />
              <strong>Size:</strong> {dog.age_years} cm
              <br />
              <strong>Age:</strong> {dog.weight_kg} years
              <br />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Cats</h2>
        <ul>
          {availableCats.cats.map((cat: Cat) => (
            <li key={cat.id}>
              <strong>Name:</strong> {cat.name}
              <br />
              <strong>Color:</strong> {cat.breed}
              <br />
              <strong>Type:</strong> {cat.color}
              <br />
              <strong>Size:</strong> {cat.age_years} cm
              <br />
              <strong>Age:</strong> {cat.weight_kg} years
              <br />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
