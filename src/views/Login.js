import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { loginUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await loginUser(email, password);
    }

    return (
        <div className='login-screen'>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isLoading && <button>Login</button>}
                {isLoading && <button disabled>Logging In...</button>}
            </form>
            <p>Don't have an account?</p>
            <Link to="/register">Register Here</Link>
        </div>
    );
}

export default Login;