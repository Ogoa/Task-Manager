import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortControl = new AbortController();

        fetch(url, { signal: abortControl.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the resource'); // if HTTP response status is anything other than 2xx
                }

                return res.json();
            })
            .then(data => { // Successful response
                setIsLoading(false);
                setData(data);
                setError(false);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    console.log(error.message);
                    setError(error.message);
                    setIsLoading(false);
                }
            })
        return () => abortControl.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;