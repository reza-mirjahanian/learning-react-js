import {useEffect, useState} from "react";


export function Fetch() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const resJson = await res.json();
        setIsLoaded(true);
        console.log(resJson);
        return resJson
    }

    useEffect(() => {
        fetchData().then((res) => {
                setItems(res)
            }
        );

    }, []);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}
