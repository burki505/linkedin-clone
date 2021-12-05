import React from 'react';
import profileImg from "../../img/profile.jpg";

import classes from "./MessagerItem.module.css";

const MessagerItem = () => {
    return (
        <li className={classes.item}>
            <div className={classes.left}>
            <img src={profileImg} alt="" />
            <div className={classes.messager__info}>
                <h5>Burak Gül</h5>
                <p>Siz: Teşekkür ederim. İyi günler.</p>
            </div>
            </div>
                <span>18 Kas</span>
        </li>
    )
}

export default MessagerItem
