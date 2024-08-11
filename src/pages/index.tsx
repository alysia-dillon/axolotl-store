import { DEFAULT_PAGE_TITLE } from "@deps/constants/page-title";
import { Axolotl, Cat, Dog } from "@deps/models/types";
import axolotls from "@deps/queries/dummy-data/axolotls.json";
import dogs from "@deps/queries/dummy-data/dogs.json";
import cats from "@deps/queries/dummy-data/cats.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog, faDragon } from "@fortawesome/free-solid-svg-icons";
import Typography, {
  TypographyVariant,
} from "@deps/components/typography/typography";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Welcome to {DEFAULT_PAGE_TITLE}</h1>
      <section>
        <Typography variant={TypographyVariant.H2}>Axolotls</Typography>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3">
          {axolotls.map((axolotl: Axolotl) => (
            <li key={axolotl.id} className="flex gap-4">
              <FontAwesomeIcon icon={faDragon} height={35} width={35} />
              {axolotl.name} ({axolotl.type})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Typography variant={TypographyVariant.H2}>Dogs</Typography>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3">
          {dogs.map((dog: Dog) => (
            <li key={dog.id} className="flex gap-4">
              <FontAwesomeIcon icon={faDog} height={35} width={35} />
              {dog.name} ({dog.breed})
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Typography variant={TypographyVariant.H2}>Cats</Typography>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3">
          {cats.map((cat: Cat) => (
            <li key={cat.id} className="flex gap-4">
              <FontAwesomeIcon icon={faCat} height={35} width={35} />
              {cat.name} ({cat.breed})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
