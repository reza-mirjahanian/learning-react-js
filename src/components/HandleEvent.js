function HandleEvent() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(arguments)
    }

    const condition = true;
    const header3 = <h3>header 3</h3>
    return (

        <form onSubmit={(e) => handleSubmit(e, 1, 3,)}>
            {header3}
            {condition ? "***" : '---'}
            <button type="submit"> Click me< /button>
        </form>
    );

}

export default HandleEvent;
