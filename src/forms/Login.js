import { useRef, useState, useEffect } from 'react';

const Login = (props) => {
    const token = props.token;
    const setToken = props.setToken
    const usernameRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
    }, [username, password]);

    const loginUser = async (credentials) => {
        const res = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const token = await res.text();
        return token;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({username, password});
        setToken(token);
    }

    return ( 
        <div>
            <h1 className='ms-3 my-3'>Sign In</h1>
            <form noValidate onSubmit={handleSubmit}>
                <div className='form-floating mb-3 mx-3'>
                    <input
                        type='text'
                        className='form-control needs-valid'
                        id='username'
                        ref={usernameRef}
                        placeholder='Username'
                        autoComplete='off'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                    <label htmlFor='username' className='text-secondary'>Username:</label>
                </div>
                <div className='form-floating mb-3 mx-3'>
                    <input
                        type='password'
                        className='form-control needs-valid'
                        id='password'
                        placeholder='Password'
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <label htmlFor='password' className='text-secondary'>Password:</label>
                </div>

                <button className='btn btn-primary ms-3'>Sign In</button>
            </form>
        </div>
     );
}
 
export default Login;