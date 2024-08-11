import { DEFAULT_PAGE_TITLE } from "@deps/constants/page-title";
import { Axolotl, Cat, Dog } from "@deps/models/types";
import axolotls from "@deps/queries/dummy-data/axolotls.json";
import dogs from "@deps/queries/dummy-data/dogs.json";
import cats from "@deps/queries/dummy-data/cats.json";

const Home = () => {
  return (
    <div>
      <h1>Welcome to {DEFAULT_PAGE_TITLE}</h1>
      <section>
        <h2>Axolotls</h2>
        <ul>
          {axolotls.map((axolotl: Axolotl) => (
            <li key={axolotl.id}>
              {axolotl.name} ({axolotl.type})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Dogs</h2>
        <ul>
          {dogs.map((dog: Dog) => (
            <li key={dog.id}>
              {dog.name} ({dog.breed})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Cats</h2>
        <ul>
          {cats.map((cat: Cat) => (
            <li key={cat.id}>
              {cat.name} ({cat.breed})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
