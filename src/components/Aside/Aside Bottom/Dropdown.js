import React from 'react';
import classes from "./Dropdown.module.css";

const Dropdown = () => {
    return (
        <div className={classes.dropdown}>
        <ul className={classes.dropdown__item}>
            <li>
            <i class="fas fa-users"></i>
            <span>Gömülü Sistemler Türkiye</span>
            </li>
            <li>
            <i class="fas fa-users"></i>
            <span>Gömülü Sistemler Türkiye</span>
            </li>
            <li>
            <i class="fas fa-users"></i>
            <span>Gömülü Sistemler Türkiye</span>
            </li>
        </ul>
    </div>
    )
}

export default Dropdown
