import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createContext } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

  const [techs, setTechs]             = useState([]);
  const [search, setSearch]           = useState("");
  const [isloading, setisloading]     = useState(true);
  const container                     = useRef(null);

  
  useEffect(() => {
      api.get("techs")
         .then(resp => setTechs(resp.data))
         .catch(err => console.log(err))       
  }, []);

  const filteredTechs = techs.filter(techs => 
    search === '' ? true : techs.name.toLowerCase().includes(search.toLowerCase()) ||
    search === '' ? true : techs.area.toLowerCase().includes(search.toLowerCase()) 
  );

  const override = {
    display: "block",
    margin: "200px auto",
    
  };

      return(
        <AuthContext.Provider 
        value={{techs, setTechs, search,
                setSearch, filteredTechs, isloading, 
                setisloading, override, container
              }}>
            {children}
        </AuthContext.Provider>
      )
};

export default AuthProvider;