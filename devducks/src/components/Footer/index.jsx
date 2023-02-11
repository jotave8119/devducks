import { FooterBox } from "./Style";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterBox>
      <footer className="feet">
        <a
          className="gitContact"
          href="https://github.com/jotave8119"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub size={25} />
          <p className="gitName">jotave8119</p>
        </a>
        <a
          className="LinContact"
          href="https://www.linkedin.com/in/joaoteixeira13/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin size={25} />
          <p className="linName">João Teixeira</p>
        </a>
        <a
          className="instContact"
          href="https://www.instagram.com/joaovitor_ts13/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillInstagram size={25} />
          <p className="insName">@joaovitor_ts13</p>
        </a>
        <span className="copy">
          João teixeira 2023
          <AiFillCopyrightCircle className="instIcon" size={10} />
        </span>
      </footer>
    </FooterBox>
  );
};

export default Footer;
