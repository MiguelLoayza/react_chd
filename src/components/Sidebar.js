import { Link } from "react-router-dom";
import White from '../img/White.png';


const Sidebar =() => {
    return (
        <div className="sidebar2">

            <div className="logo-ravn">
                <img src={White}/>
            </div>

            <ul>
                <li>
                    <Link to="/">DASHBORAD</Link>
                </li>
                <li>
                    <Link to="/Mytask">MY TASK</Link>
                </li>
                
            </ul>    

        </div>
    )    
}

export default Sidebar