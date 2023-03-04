import { Link } from "react-router-dom";
import "./style.css";

const BtnDashboard = () => {
    return(
        <Link to="/" className="glowing-btn" title="Já vai?">
            <span className='glowing-txt'>H<span className='faulty-letter'>O</span>ME</span>
        </Link>
    );
};

export default BtnDashboard;