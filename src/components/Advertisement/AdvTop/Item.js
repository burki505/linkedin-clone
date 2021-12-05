import { classExpression } from '@babel/types';
import React from 'react';
import ProfileImg from "../../../img/profile.jpg";
import classes from "./Item.module.css";

const Item = () => {
    return (
        <li>
           <div className={classes.follows}>
               <img src={ProfileImg} alt="" />
               <div className={classes.info}>
                   <h5>Ekrem İmamoglu</h5>
                   <p>İstanbul Büyükşehir Belediye Başkanı</p>
                   <button>+ Takip Et</button>
               </div>
           </div> 
        </li>
    )
}

export default Item
