import { useState, useEffect } from "react";
import useAxios from "./utils/useAxios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosInstance = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(url);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
