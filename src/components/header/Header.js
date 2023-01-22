import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = (props) => {
    const {user} = useTelegram()
    return (
        <>
            <header className="header">
                <div className="header__logo"></div>
                {props.child}
                <div className="header__wallet">{user.username}</div>
            </header>
        </>
    );
};

export default Header;