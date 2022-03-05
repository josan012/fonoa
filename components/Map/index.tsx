import Style from "./styled";
import Image from "next/image";
import Button from "@mui/material/Button";

const Map = () => {
  return (
    <Style>
      <div className="center">
        <div className="question">
          Are you compliant with the local invoicing requirements in the
          countries where you operate?
        </div>
      </div>
      <div className="center">
        <div className="answer">
          On the map below, you can find countries where we are present. Click
          on a country and find out which tax and invoicing regulations your
          company needs to meet in order to operate compliantly in that country.
        </div>
      </div>
      <div className="center">
        <div className="image">
          <Image src="/map.png" alt="Map" width={1140} height={560} />
        </div>
      </div>
    </Style>
  );
};
export default Map;
