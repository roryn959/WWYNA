import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const usernameRef = useRef();

    const navigator = useNavigate();

    const [username, setUsername] = useState('');
    const [usernameErrorMsg, setUsernameErrorMsg] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setUsernameErrorMsg('');
    }, [username]);

    useEffect(() => {
        setPasswordErrorMsg('');
    }, [password, secondPassword]);

    const alphanumeric = (s) => {
        for (let i=0; i<s.length; i++){
            let code = s.charCodeAt(i);
            let numeric = 48<=code && code<=57;
            let alpha = (65<=code && code<=90) || (97<=code && code<=122);
            if (!numeric && !alpha && code!==95 && code!==46){
                return false;
            }
        }
        return true;
    }

    const validateUsername = () => {
        if (username.length<5 || username.length>20){
            setUsernameErrorMsg('Usernames must be between 5 and 20 characters.')
            return false;
        }
        if (!alphanumeric(username)){
            setUsernameErrorMsg('Usernames must be made up from alphanumeric numbers, underscores, and periods.');
            return false;
        }
        return true;
    }

    const validPassword = () => {
        if (password.length<8 || password.length>20){
            setPasswordErrorMsg('Passwords must be between 8 and 20 characters.')
            return false;
        }
        if (!alphanumeric(password)){
            setPasswordErrorMsg('Passwords must be made up from alphanumeric numbers, underscores, and periods.');
            return false;
        }
        return true;
    }

    const checkUsernameExists = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/usernameexists`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username})
            });
            const text = await res.text();
            if (!res.ok){
                console.warn(text);
            } else {
                return text==='true';
            }
        } catch (error) {
            console.warn(error);
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateUsername()){
            return;
        }
        if (!validPassword()){
            return;
        }
        if (!(password === secondPassword)){
            setPasswordErrorMsg('Passwords do not match.')
            return;
        }

        setLoading(true);
        if (await checkUsernameExists()){
            setUsernameErrorMsg('Username already exists!');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            const text = await res.text();
            if (!res.ok){
                setPasswordErrorMsg(text);
            } else {
                navigator('/success');
            }
        } catch (err) {
            console.warn(err);
            setPasswordErrorMsg('Sorry - something went wrong...');
        } finally {
            setLoading(false);
        }
    }

    return ( 
        <div className='Register'>
            <h1 className='ms-3 my-3'>Register New Account</h1>
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
                    <p className='mx-3 text-danger'>{ usernameErrorMsg }</p>
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
                <div className='form-floating mb-3 mx-3'>
                    <input
                        type='password'
                        className='form-control needs-valid'
                        id='secondPassword'
                        placeholder='Confirm Password'
                        autoComplete='off'
                        onChange={(e) => setSecondPassword(e.target.value)}
                        value={secondPassword}
                        required
                    />
                    <label htmlFor='password' className='text-secondary'>Confirm Password:</label>
                    <p className='mx-3 text-danger'>{ passwordErrorMsg }</p>
                </div>
                <button className='btn btn-primary mx-3 mb-3'>Register { !!loading && <div className="spinner-border spinner-border-sm"></div> }</button>
            </form>
        </div>
     );
}
 
export default Register;