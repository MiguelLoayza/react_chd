import { Link } from "react-router-dom"

const Sidebar =() => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">DASHBORAD</Link>
                </li>
                <li>
                    <Link to="/Mytask">MY TASK</Link>
                </li>
                
                <li>
                    <Link to="/" className="btn btn-primary">Prueba</Link>
                </li>
            </ul>    
        </div>
    )    
}

export default Sidebar