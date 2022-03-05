import Style from "./styled";
import Image from "next/image";
import Button from "@mui/material/Button";

const Card = () => {
  return (
    <Style>
      <div className="center">
        <div className="card">
          <div className="text">
            <p className="expand">Expanding our services to new countries</p>
            <Button
              className="buton-text"
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
          <div className="image">
            <Image src="/image.png" alt="Invoice" width={700} height={440} />
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Card;
