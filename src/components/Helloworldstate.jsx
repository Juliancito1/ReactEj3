import { useState } from "react";

const Helloworldstate = () => {
const [world, setWorld] = useState('Hello World');
    return (
        <div>
            <h1>{world}!</h1>
            <button onClick={() => setWorld(world + ' (from changed state)')}>Click me</button>
        </div>
    );
};

export default Helloworldstate;