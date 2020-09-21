import { useEffect, useState } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            try{
                const response = await fetch(url);
                const result = await response.json();
                if (response.ok) {
                    setData(result)
                } else {
                    setErrorMessage(result);
                }
                setIsLoading(false);
            } catch(error) {
                setErrorMessage(error.message)
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);


    return { data, isLoading, errorMessage };
};

export default useFetch;