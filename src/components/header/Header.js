import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user} = useTelegram()
    console.log(user.username)
    return (
        <>
            <header className="header">
                <div className="header__logo"></div>

                <div className="header__wallet">ssss</div>
            </header>
        </>
    );
};

export default Header;