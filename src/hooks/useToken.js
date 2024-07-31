import { useEffect, useState } from 'react';

const useToken = () => {
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem('token');
        const token = JSON.parse(savedToken);
        return token;
    });

    useEffect(() => {
        if (token){
          localStorage.setItem('token', JSON.stringify(token));
        }
      }, [token]);

    return [token, setToken];
}
 
export default useToken;