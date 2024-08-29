import { useState, useEffect } from 'react';

const usePeople = (token) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getPeople`, {
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
            } catch (err) {
                setError(err.body);
                setIsPending(false);
            }
        }
        fetchData();
    }, [token]);

    return { data, isPending, error }
}
 
export default usePeople;