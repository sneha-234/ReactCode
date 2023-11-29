import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCount from "./Myount";

function Count ()
{
    const [show, setShow] = useState(true);
    function handleShowAndHide()
            {
                setShow(!show);
            }
    return(
        <center>
          <MyCount  show={show}/>
          <MyCount  show ={show}/>
          <Button onClick = {handleShowAndHide} > {show ? "HIDE":"SHOW" }</Button>
        </center>
    )

}
export default Count; 