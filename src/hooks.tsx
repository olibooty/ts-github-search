import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRequest = (url: string): any => {
    const [data, setData] = useState({})
    const [queryString, setQueryString] = useState('');
    let error = null

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(url + queryString);
                console.log('is it being set?')
                setData(data);
            }
            catch (err) {
                error = err;
            }
        })();
    },[queryString]);

    return [error, data, setQueryString];
}

// const [error, data, setQueryString] = useRequest('https://api.github.com/search/repositories')
