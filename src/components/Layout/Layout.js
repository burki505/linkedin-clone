import React from 'react';
import Aside from '../Aside/Aside';
import MainNews from "../MainNews/MainNews";
import Adv from "../Advertisement/Adv";
import Message from '../UI/Message';
import classes from "./Layout.module.css";


const Main = () => {
    return (
        <main className={classes.container}>
            <Aside />
            <MainNews />
            <Adv />
            <Message />
        
        </main>
    )
}

export default Main
