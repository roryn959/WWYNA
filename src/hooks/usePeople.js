import { useState, useEffect } from 'react';

const usePeople = (url, creator) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                const res = await fetch(url);
                if (!res.ok){
                    throw Error('Could not fetch data :(');
                }
                const json = await res.json();
                const people = [];
                for (let person of json){
                    if (person.creator===creator){
                        people.push(person);
                    }
                }
                setData(people);
                setIsPending(false);
                setError(null);
        }
        fetchData();
    }, [url, creator]);

    return { data, isPending, error }
}
 
export default usePeople;