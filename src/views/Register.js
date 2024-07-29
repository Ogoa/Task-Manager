import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await registerUser(email, username, password, password2);
    }

    return (
        <div className='register-screen'>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <label>Confirm Password</label>
                <input
                    type='password'
                    required
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                {!isLoading && <button>Sign Up</button>}
                {isLoading && <button disabled>Signing Up...</button>}
            </form>
            <p>Already have an account?</p>
            <Link to="/login">Login Here</Link>
        </div>
    );
}

export default Register;