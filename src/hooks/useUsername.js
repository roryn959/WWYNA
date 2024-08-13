import { useEffect, useState } from 'react';

const useUsername = () => {
    const [username, setUsername] = useState(() => {
        const savedUsername = localStorage.getItem('username');
        const username = JSON.parse(savedUsername);
        return username;
    });

    useEffect(() => {
        localStorage.setItem('username', JSON.stringify(username));
      }, [username]);

    return [username, setUsername];
}
 
export default useUsername;