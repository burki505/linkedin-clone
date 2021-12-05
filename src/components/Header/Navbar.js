import React, {useState, useEffect, useContext, useRef, useCallback} from 'react';
import profileImg from "../../img/profile.jpg";
import Input from '../UI/Input';

import classes from "./Navbar.module.css";

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    
    const ref = useRef();

    const handleClickOutside = useCallback((e) => {
            if(ref.current && isOpen){

           
            console.log(ref.current);
            if(e.target.className !== ref.current.className){
                setIsOpen(false);
            }
            else{
                return;
            }
        }
    },[isOpen]);



    useEffect(() => {
        
            document.addEventListener("click", handleClickOutside);
        
        return () => {
            document.removeEventListener("click",handleClickOutside);
        }
    },[handleClickOutside]);

    return (
        <nav className={classes.nav}>
            <div className={classes.nav__brand}>
                <a href=""><i class="fab fa-linkedin"></i></a>
                <Input type="text" placeholder="Arama Yap" />
            </div>
            <ul className={classes.nav__nav__group}>
                <li className={`${classes.nav__nav__group__item} ${classes.active}`}>
                <i class="fas fa-home"></i>
                <span>Ana Sayfa</span> 
                </li>
                <li className={classes.nav__nav__group__item}>
                <i class="fas fa-user-friends"></i>
                <span>Ağım</span> 
                </li>
                <li className={classes.nav__nav__group__item}>
                <i class="fas fa-briefcase"></i>
                <span>İş İlanları</span> 
                </li>
                <li className={classes.nav__nav__group__item}>
                <i class="fas fa-comment-dots"></i>
                <span>Mesajlaşma</span> 
                </li>
                <li className={classes.nav__nav__group__item}>
                <i class="fas fa-bell"></i>
                <span>Bildirimler</span> 
                </li>
                <li onClick={() => setIsOpen(true)} className={`${classes.nav__nav__group__item} ${classes.nav__dropdown} ${classes.nav__nav__group__profile}`}>
                <img src={profileImg} alt="" />
                <div   className={classes.nav__nav__group__arrow}>
                    <span>Ben</span>
                    <i class="fas fa-sort-down"></i>
                </div>
                  {isOpen  && <div ref={ref} className={classes.dropdown}>
                    <div className={classes.top}>
                        <div className={classes.profile__info}>
                            <img src={profileImg} alt="" />
                            <div className={classes.profile}>
                               <h4>Burak Yazal</h4>
                               <p>Junior Developer</p> 
                            </div>
                            
                        </div>
                        <button>Profili Görüntüleyin</button>
                        </div>
                        <div className={classes.body}>
                            <h5>Hesap</h5>
                            <a href="">Ayarlar ve Gizlilik</a>
                            <a href="">Yardım</a>
                            <a href="">Dil</a>
                        </div>
                        <div className={classes.body}>
                            <h5>Yönet</h5>
                            <a href="">Gönderi ve Faaliyetler</a>
                            <a href="">İş ilanı yayınlama hesabı</a>
                            
                        </div>
                        <div className={classes.body}>
                   
                            <a href="">Oturumu Kapat</a>
                            
                        </div>
                        
                    </div>}
                </li>
                <li className={`${classes.nav__nav__group__item}  ${classes.nav__nav__group__business}`}>
                <i class="fas fa-th"></i>
                <div className={classes.nav__nav__group__arrow}>
                    <span>İş</span>
                    <i class="fas fa-sort-down"></i>
                </div>
                </li>

                <li className={`${classes.nav__nav__group__item} ${classes.nav__nav__group__item__adv}`}><a href="">Premium ücretsiz deneyin</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
