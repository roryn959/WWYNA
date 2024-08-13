import { useRef, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Login = (props) => {
    const setToken = props.setToken;
    const usernameRef = useRef();

    const [username, setUsername] = props.usernameState;
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setErrorMsg('');
    }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            if (!res.ok){
                const text = await res.text();
                setErrorMsg(text);
            } else {
                const json = await res.json();
                setToken(json.token);
            }
        } catch (error) {
            console.warn(error);
            setErrorMsg('Sorry - something went wrong...');
        }
    }

    return ( 
        <div className='login'>
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
                <p className='mx-3 text-danger'>{ errorMsg }</p>
                <button className='btn btn-primary mx-3 mb-3'>Sign In</button>
            </form>
            <p className='mx-3'>Don't have an account?<Button variant='link' href='register'>Register here</Button></p>
        </div>
     );
}
 
export default Login;