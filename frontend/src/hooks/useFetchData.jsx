import { useEffect, useState } from "react";
import { token } from "../config.js";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const result = await res.json();
            if (!res.ok) {
                throw new Error(result.message);
            }
            setData(result.data);
            setLoading(false);
            setError(null);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    const refetchData = () => {
        fetchData();
    };

    return {
        data,
        loading,
        error,
        refetchData,
    };
};

export default useFetchData;
