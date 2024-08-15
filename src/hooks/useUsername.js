import { useEffect, useState } from 'react';

const useUsername = (token) => {
    const [username, setUsername] = useState(() => {
        const savedUsername = localStorage.getItem('username');
        const username = JSON.parse(savedUsername);
        if (username){
            return username;
        }
        return undefined;
    });

    useEffect(() => {
        if (token){
            localStorage.setItem('username', JSON.stringify(username));
        }
      }, [username, token]);

    return [username, setUsername];
}
 
export default useUsername;