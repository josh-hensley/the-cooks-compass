import React, { useState, useEffect } from 'react';
import auth from '../utils/auth.js';

const BrowseRecipes: React.FC = () => {
    const [loginCheck, setLoginCheck] =  useState(false);
    const checkLogin = () => {
        if (auth.loggedIn()){
            setLoginCheck(true);
        }
    }
    useEffect(()=>{
        checkLogin();
    }, [loginCheck])
    return (
        <>{
            !loginCheck ? (
                <h1>Login to view Recipes</h1>
            ):(
                <h1>Browse Recipes Page</h1>
            )
        }</>
)};

export default BrowseRecipes;
