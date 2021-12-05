import React from 'react';
import classes from "./Card.module.css";

const Card = React.forwardRef((props,ref) => {

   



    return (
        <div ref={ref} className={`${classes.card} ${props.className}`}>
            {props.children} 
        </div>
    )
});

export default Card
