import React from 'react';
import Card from '../../UI/Card';
import Item from './Item';
import classes from "./AdvTop.module.css";

const AdvTop = () => {
    return (
        <Card className={classes.top}>
            <div className={classes.header}>
                <h4>Akışınıza Ekleyin</h4>
                <i class="fas fa-info-circle"></i>
            </div>
            <ul>
                <Item />
                <Item />
                <Item />
            </ul>
            <button className={classes.propose}>Tüm tavsiyeleri görüntüle <i class="fas fa-long-arrow-alt-right"></i></button>
        </Card>
    )
}

export default AdvTop
