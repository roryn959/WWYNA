import { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const tokenObj = JSON.parse(tokenString);
        return tokenObj?.token
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token.token);
    }

    return {
        token,
        setToken: saveToken,
    }
}
 
export default useToken;