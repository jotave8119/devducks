import { Link } from "react-router-dom";
import "./style.css";

const BtnDashboard = () => {
    return(
        <Link to="/" className="glow-btn" title="Já vai?">
            <span className='glow-txt'>H<span className='fau-letter'>O</span>ME</span>
        </Link>
    );
};

export default BtnDashboard;