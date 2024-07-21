import { useRef, useState, useEffect } from 'react';

const Login = (props) => {
    const setToken = props.setToken
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
    }, [user, pwd]);

    const loginUser = async (credentials) => {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(data => data.json())
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({user, pwd});
        setToken(token);
    }
    

    return ( 
        <div>
            <h1 className='ms-3 my-3'>Sign In</h1>
            <form novalidate onSubmit={handleSubmit}>
                <div className='form-floating mb-3 mx-3'>
                    <input
                        type='text'
                        className='form-control needs-valid'
                        id='username'
                        ref={userRef}
                        placeholder='Username'
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
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
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
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