import { useState } from "react";

const Handlebutton=() => {
    const [count , setcount] = useState(11)
    const handlebuttonclick = () => {
        const counter = count + 1;
        setcount(counter)
    };
    const handlebutton2 = () => {
        const counter = count - 1  ;
        setcount(counter)
    };
    const Handlebuttonstyle = {
        margin : "15px",
        padding : "10px",
        border : "1px solid purple",
        borderRadius : "10px",
        backgroundColor : 'purple'
    }
    return (
        <div style={Handlebuttonstyle}>
            <h2>count : {count}</h2>
            <button onClick={handlebuttonclick}>Click Me for add</button>
            <button onClick={handlebutton2}>Click Me for delete</button>
        </div>
    )
}
export default Handlebutton