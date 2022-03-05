import Style from "./styled";
import Image from "next/image";

const Footer = () => {
  return (
    <Style>
      <div className="center">
        <div className="footer">
          <div className="logo">
            <Image src="/logo.png" alt="logo" width={190} height={40} />
            <div className="links">
              <a href="#">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={42}
                  height={42}
                />
              </a>
              <a href="#">
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={42}
                  height={42}
                />
              </a>
              <a href="#">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={42}
                  height={42}
                />
              </a>
            </div>
          </div>
          <div className="column">
            <a href="#">
              <b>Use Cases</b>
            </a>
            <a href="#">Company</a>
            <a href="#">Careers</a>
            <a href="#">Offices</a>
            <a href="#">Get in Touch</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="column">
            <a href="#">
              <b>About us</b>
            </a>
            <a href="#">Ridesharing</a>
            <a href="#">Food Delivery</a>
            <a href="#">Micro Mobility</a>
          </div>
          <div className="column">
            <a href="#">
              <b>Insights</b>
            </a>
            <a href="#">Country News</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Footer;
