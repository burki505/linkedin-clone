import React, {useEffect} from 'react';
import Card from '../UI/Card';
import advImg from "../../img/adv.jpg";
import linkLogo from "../../img/linkedin-logo.png";
import classes from "./AdvBottom.module.css";

const AdvBottom = () => {

    const ref = React.createRef();

   

    useEffect(() => {

        
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            
            if(scroll >= 420){
                ref.current.style.position = "fixed";
                ref.current.style.top = "50px";
                ref.current.style.right = "180px";
            }
            else{
                ref.current.style.position = "static";
            }
        });

    },[ref]);

    return <section ref={ref}>
        <Card  className={classes.advertise}>
            <img src={advImg} alt="" />
        </Card>
        <div className={classes.tags}>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
            <a href="">Hakkında</a>
        </div>
        <footer className={classes.footer}><img src={linkLogo} alt="" />Linkedin Corporation &copy; 2021</footer>
        </section>
}

export default AdvBottom;
