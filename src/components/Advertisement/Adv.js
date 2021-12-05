import React from 'react';
import AdvTop from './AdvTop/AdvTop';
import AdvBottom from "./AdvBottom";



import classes from "./Adv.module.css";

const Adv = () => {
    return (
        <section className={classes.adv}>
           <AdvTop />
           <AdvBottom />
           
        </section>
    )
}

export default Adv
