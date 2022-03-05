import Style from "./styled";
import Image from "next/image";

const Navbar = () => {
  return (
    <Style>
      <div className="center">
        <div className="navbar">
          <div className="logo">
            <Image src="/logo.png" alt="logo" width={190} height={40} />
          </div>
          <div className="bar">
            <div className="link">
              <a href="#">Platform</a>
            </div>
            <div className="link">
              <a href="#">Markets</a>
            </div>
            <div className="link">
              <a href="#">Use Cases</a>
            </div>
            <div className="link">
              <a href="#">Insight</a>
            </div>
            <div className="link">
              <a href="#">About Us</a>
            </div>
            <div className="link">
              <a href="#">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Navbar;
