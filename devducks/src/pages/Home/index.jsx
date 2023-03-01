import React from "react";
import { HomeContainer } from "./style.js";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import ParticlesBackground from "../../components/InitialBackground/Particles.jsx";
import DevdocsLogo1 from "../../assets/DevdocsLogo1.png";
import BtnHome from "../../components/BtnHome/index.jsx";


const Home = () => {

  return (
    <HomeContainer>
      <ParticlesBackground id="particles" />
      <div className="box">
        <img className="devdocs" src={DevdocsLogo1} alt="Devducks" />
        <h2 className="welcome">Bem-vindo(a) ao DevDUCKS!</h2>
        <p className="about">
          O DevDUCKS nada mais é que uma central de documentações. Sim! Elas
          estão reunidas em um só lugar para facilitar a sua vida.
        </p>

        <div className="techs">
          <a
            href="https://pt-br.reactjs.org/docs/getting-started.html"
            className="reactIcon"
            target="_blank"
            rel="noreferrer noopener"
            title="React JS"
          >
            <FaReact size={40} />
          </a>
          <a
            href="https://git-scm.com/doc"
            className="gitIcon"
            target="_blank"
            rel="noreferrer noopener"
            title="Git"
          >
            <FaGitAlt size={40} />
          </a>
          <a
            href="https://nodejs.org/pt-br/docs/"
            className="nodeIcon"
            target="_blank"
            rel="noreferrer noopener"
            title="Node Js"
          >
            <FaNodeJs size={40} />
          </a>
          <a
            href="https://classic.yarnpkg.com/lang/en/docs/"
            className="yarnIcon"
            target="_blank"
            rel="noreferrer noopener"
            title="Yarn"
          >
            <FaYarn size={40} />
          </a>
          <a
            href="https://www.typescriptlang.org/docs/"
            className="tsIcon"
            target="_blank"
            rel="noreferrer noopener"
            title="TypeScript"
          >
            <SiTypescript size={40} />
          </a>
        </div>
        <BtnHome/>
      </div>
      <footer className="foot"></footer>
    </HomeContainer>
  );
};

export default Home;
