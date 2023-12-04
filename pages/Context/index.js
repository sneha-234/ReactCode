import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from "./post";
import Text from "./Text";
import Profile from "./profile";
import { Fontsizecontext } from "./fontsizecontext";
import Fontsize from "./fontsize";

 

const ChangeFontSize = () =>
{
    const [fontsize , setFontSize] = useState();

    return (
        <center>
            <Fontsize  handleFont = {setFontSize} />
            <Fontsizecontext.Provider value={fontsize}>
                <Profile/>
                <Posts/>

            </Fontsizecontext.Provider>
           

        </center>
    )
}

export default ChangeFontSize ;