import React from 'react';
import Card from '../UI/Card';
import profileImg from "../../img/profile.jpg";
import classes from "./Comment.module.css";

const Comment = () => {
    return (
        <Card className={classes.container}>
            <div className={classes.top}>
                <img src={profileImg} alt="" />
                <input type="text" placeholder="Bir gönderi başlat" />
            </div>
            <div className={classes.labels}>
                <div className={classes.label}>
                <i class="fab fa-youtube"></i>
                    <span>Fotograf</span>
                </div>
                <div className={classes.label}>
                <i class="fab fa-youtube"></i>
                    <span>Fotograf</span>
                </div>
                <div className={classes.label}>
                <i class="fab fa-youtube"></i>
                    <span>Fotograf</span>
                </div>
                <div className={classes.label}>
                <i class="fab fa-youtube"></i>
                    <span>Fotograf</span>
                </div>
            </div>
        </Card>
    )
}

export default Comment
