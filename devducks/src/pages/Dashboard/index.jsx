import { AuthContext } from "../../contexts/AuthContext";
import React, {  useContext } from "react";
import { DashboardContainer } from "./Style";
import dashLogo1 from "../../assets/dashLogo1.png";
import TechsList from "../../components/TechsList";
import Footer from "../../components/Footer";
import BtnDashboard from "../../components/BtnDashboard";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const { setSearch, isloading } = useContext(AuthContext);

  return (isloading ? (
    <Loading />
  ) : (
    <DashboardContainer>
      <nav className="navBar" id="topBar">
        <img
          className="dashLogo"
          title="Quack!"
          src={dashLogo1}
          alt="DevducksLogo"
        />
        <input
          className="form"
          placeholder="Procure uma tech"
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <BtnDashboard />
      </nav>
      <ul className="list">
        <TechsList />
      </ul>
      <Footer />
    </DashboardContainer>
  ))
};

export default Dashboard;
