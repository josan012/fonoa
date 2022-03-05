import Style from "./styled";
import Image from "next/image";

const Global = () => {
  return (
    <Style>
      <div className="center">
        <div className="secondCard">
          <div className="text">
            <p className="global">Global presence, local knowledge</p>
            <p className="description">
              Our teams are made up of local people, who know the best local
              environment and helping us shape the best solution for our
              clients. Today, we are present in Europe and Latin America, but we
              are constantly working to expand our service to other countries,
              depending on their adoption of new tax and e-invoicing
              regulations.
            </p>
          </div>
          <div className="image">
            <Image src="/world.png" alt="world" width={395} height={515} />
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Global;
