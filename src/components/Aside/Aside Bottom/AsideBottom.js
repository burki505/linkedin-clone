import React, {useEffect} from 'react';
import Card from '../../UI/Card';
import Dropdown from './Dropdown';
import AsideHeader from './AsideHeader';

import classes from "./AsideBottom.module.css";

const AsideBottom = () => {

    const ref = React.createRef();

   

    useEffect(() => {

        
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            
            if(scroll >= 420){
                ref.current.style.position = "fixed";
                ref.current.style.top = "80px";
                ref.current.style.left = "190px";
            }
            else{
                ref.current.style.position = "static";
            }
        });

    },[ref]);


    return (
        <Card ref={ref} className={classes.bottom}>
           <div className={classes.header}>
               <h3>En Yeni</h3>
               <i class="fas fa-chevron-down"></i>
      
           </div>
           <Dropdown />
            <AsideHeader />
            <Dropdown />
            <AsideHeader />

            <p className={classes.discover}>Daha fazla keşfet</p>
            

        </Card>
    )
}

export default AsideBottom
