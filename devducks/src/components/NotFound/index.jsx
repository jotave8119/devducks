import Lottie from "lottie-web";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./style.css";

const NotFound = () => {
  const { container } = useContext(AuthContext);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets2.lottiefiles.com/private_files/lf30_k6fpeaa5.json",
    });
    return () => Lottie.destroy();
  }, [container]);

  return (
    <>
      <div className="notfound" ref={container}></div>
      
    </>
  );
};

export default NotFound;
