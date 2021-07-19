import React, {useEffect, useState} from "react";
import axios from 'axios';

export function AxiosTest() {

    const [data, loadData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux',
            );
            console.log(data.hits)
            loadData(data.hits);
        };

        fetchData();
    }, []);


    return (
        <ul>
            {data.map((item, index) => {
                return <li key={index}>{item.title}</li>
            })}
        </ul>
    )
}
