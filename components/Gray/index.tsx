import Style from "./styled";
import Image from "next/image";
import Button from "@mui/material/Button";
import theme from "../theme";

const Gray = () => {
  return (
    <Style>
      <div className="center">
        <div className="grey">
          <div className="center">
            <Image
              className="image"
              src="/Frame.png"
              alt="Ticket"
              width={67}
              height={100}
            />
          </div>
          <div className="center">
            <p className="plug">
              Plug and play into your existing systems worldwide
            </p>
          </div>
          <div className="center">
            <p className="description">
              Instead of companies having to build their own infrastructure or
              partner with providers in each of the countries they operate, they
              choose us as their global and trusted partner.
            </p>
          </div>
          <div className="center">
            <Button
              variant="contained"
              sx={{
                width: 200,
                height: 60,
                borderRadius: "50px",
                ":hover": {
                  bgcolor: "#28df7e",
                  color: "white",
                },
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Gray;
