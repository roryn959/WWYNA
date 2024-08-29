import { useState, useEffect } from 'react';

const useFetch = (personID) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/getPerson`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({personID})
                });
                setIsPending(false);
                if (!res.ok){
                    const text = await res.text();
                    setError(text);
                } else {
                    const person = await res.json();
                    setData(person);
                }
            } catch (err) {
                setIsPending(false);
                setError(err.message);
            }
        }
        fetchData();
    }, [personID]);



    return { data, isPending, error };
}

export default useFetch;
