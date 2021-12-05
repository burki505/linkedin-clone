import React from 'react';
import AsideTop from './AsideTop';
import AsideBottom from './Aside Bottom/AsideBottom';
import Card from "../UI/Card";

import classes from "./Aside.module.css";

const Aside = () => {
    return (
        <div className={classes.aside}>
            <AsideTop />
            <AsideBottom />
        </div>
    )
}

export default Aside
