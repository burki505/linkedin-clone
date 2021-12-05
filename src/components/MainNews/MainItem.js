import React from 'react';
import Card from '../UI/Card';
import profileImg from "../../img/profile.jpg";
import PostImg from "../../img/post.jpg";
import classes from "./MainItem.module.css";

const MainItem = () => {
    return (
        <Card className={classes.main__item}>
            <div className={classes.header}>
                <p><span>Eray Fırat</span> ve <span>Emre Mert</span> bunu begendi</p>
                <span className={classes.settings}><p>...</p></span>
            </div>
            <div className={classes.main__body}>
                <div className={classes.main__body__profile}>
                    <img src={profileImg} alt="" />
                    <div className={classes.person}>
                    <div className={classes.top}>
                    <h5>Mehmet ADA</h5> 
                        <span>2.</span>
                    </div>
                        <div className={classes.description}>
                        <span>Bilişim School Founder</span>
                        <span>1 saat <i class="fas fa-globe-americas"></i></span> 
                        
                        </div>
                 
                        
                    </div>
                </div>
                <div className={classes.main__para}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, sapiente.</p>
                    <img src={PostImg} alt="" />
                </div>
                <div className={classes.likes}>
                    <div className={classes.likes__left}>
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-hand-holding-heart"></i>
                    <i class="fas fa-podcast"></i>
                    <span>Ahmet Kayhan Çetinkaya ve 35 diğer kişi</span>
                    </div>
                    <div className={classes.comment}>
                        1 yorum
                    </div>
                </div>
                <div className={classes.buttons}>
                    <button><i class="far fa-thumbs-up"></i> Beğen</button>
                    <button><i class="fas fa-comment-dots"></i> Yorum Yap</button>
                    <button><i class="fas fa-share"></i> Paylaş</button>
                    <button><i class="fas fa-paper-plane"></i> Gönder</button>
                </div>
            </div>
        </Card>
    )
}

export default MainItem
