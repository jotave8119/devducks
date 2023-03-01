import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Lottie from "lottie-web";
import "./style.css";

const NotFound = () => {

  const { container } = useContext(AuthContext);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/lf20_1vhutqov.json",
    });
    return () => Lottie.destroy();
  }, [container]);

  return (
      <div className="notfound" ref={container}></div>
  );
};

export default NotFound;
