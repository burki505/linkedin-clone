import React from 'react';
import profileImg from "../../img/profile.jpg";
import Card from '../UI/Card';
import classes from "./AsideTop.module.css";

const AsideTop = () => {
    return (
        <Card className={classes.top}>
        <div className={classes.top__img}>
            <span className={classes.top__circle}>
            <img src={profileImg} alt="" />
            </span>
            
        </div>
        <div className={classes.profile}>
            <h2>BURAK YAZAL</h2>
            <p>Junior Web Developer || MERN Stack</p>
        </div>
        <div className={classes.profile__stats}>
            <div className={classes.stat}>
                <p>Profilinizi Kimler görüntüledi</p>
                <span>66</span>
            </div>
            <div className={classes.stat}>
                <p>Yayınınız için görüntüleme</p>
                <span>328</span>
            </div>
        </div>
        <div className={classes.premium__adv}>
            <p>Özel araç ve içgörülere erişin</p>
            <div>
            <i class="fab fa-xing-square"></i>
                <p>Premium'u ücretsiz deneyin</p>
            </div>
        </div>
        <div className={classes.unit}>
        <i class="fas fa-clipboard-check"></i>
        <p>Ögelerim</p>
        </div>

    </Card>
    )
}

export default AsideTop
