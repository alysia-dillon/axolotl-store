// pages/index.tsx
import { GetServerSideProps } from "next";
import { getAxolotls } from "@deps/queries/api/api";
import { Axolotl } from "@deps/models/types";

interface Props {
  axolotls: Axolotl[];
}

const Home = ({ axolotls }: Props) => {
  return (
    <div>
      <h1>Axolotl Store</h1>
      <ul>
        {axolotls.map((axolotl) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await getAxolotls();
  return {
    props: {
      axolotls: "axolotls" in result ? result.axolotls : [],
    },
  };
};

export default Home;
