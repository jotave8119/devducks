import { useEffect } from "react";
import { useContext } from "react";
import { PuffLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import "./style.css";

const Loading = () => {

    const{isloading, setisloading, override} = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
          setisloading(false);
        }, 1500);
      }, [setisloading]);

    return(
      <div className="loadBox">
        <PuffLoader
        color="#a016c7"
        isloading={isloading}
        size={300}
        cssOverride={override}
        />
      </div>
    );
};

export default Loading;