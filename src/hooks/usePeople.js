import { useState, useEffect } from 'react';

const usePeople = (token) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                const res = await fetch('http://localhost:8080/getPeople', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({token})
                });
                if (!res.ok){
                    throw Error('Could not fetch data :(');
                } else{
                    const json = await res.json();
                    setData(json);
                    setError(null);
                }
                setIsPending(false);
        }
        fetchData();
    }, [token]);

    return { data, isPending, error }
}
 
export default usePeople;