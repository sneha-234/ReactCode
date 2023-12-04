import React, {  useContext } from "react";
import {  Fontsizecontext } from "./fontsizecontext";

function Text(props) 
{
    const { displayText } = props;

    const fontsize = useContext(Fontsizecontext);

    return (
        <div style={{ fontSize: (fontsize || "14") + "px" }}>{displayText}</div>
    );
}

export default Text;
