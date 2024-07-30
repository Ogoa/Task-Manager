import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
    const { logoutUser } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <h2>Task Manager</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/create'>New Task</Link>
                <button onClick={() => logoutUser()}>Logout</button>
            </div>
        </div>
    );
}

export default NavBar;