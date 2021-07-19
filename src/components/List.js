export default function list() {
    const numbers = [1, 3, 5];
    return (
        <ul>
            {numbers.map((num) =>{
                return <li key={num}>{num}</li>
            })}
        </ul>
    )
}
