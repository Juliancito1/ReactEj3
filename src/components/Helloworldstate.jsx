import { useState } from "react";

const Helloworldstate = () => {
const [msj, setMsj] = useState('');
    return (
        <div>
            <h1>Hello my friend {msj}!</h1>
            <button onClick={() => setMsj('(from changed state)')}>Click me</button>
        </div>
    );
};

export default Helloworldstate;