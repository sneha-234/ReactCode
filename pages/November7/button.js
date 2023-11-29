import React from  'react';
import styles from './Button.module.css'; 

export  default  function Button (props)
{
     const buttonVarient = `${styles.button} ${styles[props.variant]}`
     
       return (
        <button className = {buttonVarient} onClick ={props.onClick} >
             {props.label}
        </button>
       )

}

