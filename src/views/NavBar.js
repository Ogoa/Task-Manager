import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <h2>Task Manager</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/create'>New Task</Link>
            </div>
        </div>
    );
}

export default NavBar;