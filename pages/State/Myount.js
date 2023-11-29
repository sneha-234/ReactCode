
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyCount(props)
{
        {
            const {show} = (props)
            const [counter, setCounter] = useState(0);
            //const [show, setShow] = useState(true);
        
            function increseValue()
            {
                setCounter(counter+1);
            }
            function isAge ()
            {
                if(counter <= 18)
                {
                    return ' Not Eligible' ;
                }
                    return 'Eliglible';
            }
           
            return(
                <center>
                  <p>Counter Value = {counter}</p>
                      {show && 
                      (
                        <p> Is Age? {isAge()} </p>
                      )}
        
                  <Button onClick={increseValue}> ClickMe+ </Button>
                </center>
            )
        }
    
}
export default MyCount;