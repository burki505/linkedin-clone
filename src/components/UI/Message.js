import React, {useState} from 'react';
import Card from './Card';
import statusImg from "../../img/online.jpg";
import Input from './Input';
import MessagerItem from './MessagerItem';
import classes from "./Message.module.css";

const Message = () => {

    const [isShown,setIsShown] = useState(false);

    return (
        <Card className= {`${classes.inbox} ${isShown ? classes.show : classes.hide}`}>
            <div  className={`${classes.top}`}>
                <div onClick={() => setIsShown(true)} className={classes.profile}>
                    <img src={statusImg} alt="" />
                    <p>Mesajlaşma</p>
                </div>
                <div className={classes.settings}>
                    <button>...</button>
                    <button><i class="fas fa-external-link-alt"></i></button>
                    {isShown ? <button onClick={() => setIsShown(false)}><i class="fas fa-chevron-down"></i></button> : <button onClick={() => setIsShown(true)}><i class="fas fa-chevron-up"></i></button>}
                    
                    
                </div>
            </div>
            <div className={classes.inputForm}>
                <Input type="text" placeholder="Mesajlarda Arayın" />
                <i className="fas fa-sliders-h filter"></i>
            </div>
            <ul className={classes.message__group}>
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
                <MessagerItem />
            </ul>
        </Card>
    )
}

export default Message
