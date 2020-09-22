import { useEffect, useState } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [refetchIndex, setRefetchIndex] = useState(0);

    const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

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
    }, [url, refetchIndex]);


    return { data, isLoading, errorMessage, refetch };
};

export default useFetch;