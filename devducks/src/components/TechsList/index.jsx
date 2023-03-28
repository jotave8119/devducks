import React from "react";
import NotFound from "../NotFound";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ListContainer } from "./Style";
import {RxDoubleArrowUp} from "react-icons/rx";
import { Link } from "react-scroll";


const TechsList = () => {

  const {  filteredTechs } = useContext(AuthContext);

    if(filteredTechs.length === 0){
       return (<NotFound/>)
        
      
    } else{
        <ListContainer/>
    }

  return (
    <ListContainer>
      {filteredTechs.map((tech) => (
        <li key={tech.id}>
          <div className="imgBox">
            <img className="techImg" loading="lazy" src={tech.image} alt="img" />
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
          <Link 
            to="topBar" 
            className="top"
            title="voltar ao topo!" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}>
              <RxDoubleArrowUp size={20}/>
          </Link>
        </li>
      ))}
      
    </ListContainer>
  );
};

export default TechsList;
