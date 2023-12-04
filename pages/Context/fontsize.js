import React , {useState} from "react";
import Text from "./Text";

function Fontsize (props)
{
    const [inputValue , setInputValue] = useState("");

    const handleFont = props.handleFont

    const handleChange = (e) =>
    {
        setInputValue(e.target.value)
    }

    const handleSubmit = () =>
    {
        handleFont(inputValue)
    }

    return (
        <div style={{marginTop : "40px"}} >
            <input name = "Font Size " placeholder=" Enter the Font size" onChange={handleChange}/>
            <button type = "button"  onSubmit={handleSubmit}> Change the Font Size</button>
        </div>
    )
}

export default Fontsize ;

