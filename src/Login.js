import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
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
        </div>
    );
}

export default Login;