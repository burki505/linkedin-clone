import React from 'react';
import Comment from "./Comment";
import MainItem from './MainItem';
import classes from "./MainNews.module.css";

const MainNews = () => {
    return (
        <section className={classes.main__news}>
           <Comment />
           <div className={classes.filter}>
               <hr />
             
                   <p>Sıralama ölçütü: <span>En Önemli</span> <i class="fas fa-caret-down"></i></p>
              
           </div>
           <MainItem />
           <MainItem />
           <MainItem />
           <MainItem />
           <MainItem />
           <MainItem />
           <MainItem />
           <MainItem />
           <MainItem />
        </section>
    )
}

export default MainNews
