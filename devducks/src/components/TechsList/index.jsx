import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";
import NotFound from "../NotFound";
import { ListContainer } from "./Style";

const TechsList = () => {

  const { isLoading, filteredTechs } = useContext(AuthContext);

    if(filteredTechs.length === 0){
      return(
        <NotFound/>
      )
    } else{
        <ListContainer/>
    }

  return isLoading ? (
    <Loading/>
  ) : (
    <ListContainer>
      {filteredTechs.map((tech) => (
        <li key={tech.id}>
          <div className="imgBox">
            <img className="techImg" src={tech.image} alt="img" />
          </div>
          <div className="info">
            <h4 className="techName">Nome: {tech.name}</h4>
            <span className="techArea">área: {tech.area} </span>
          </div>
          <div className="docBtn">
            <a
              className="documentation"
              href={tech.doc}
              target="_blank"
              rel="noreferrer noopener"
              title="Ver Doc!"
            >
              Ver Doc
            </a>
          </div>
        </li>
      ))}
    </ListContainer>
  );
};

export default TechsList;
