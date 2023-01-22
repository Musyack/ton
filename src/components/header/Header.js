import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg} = useTelegram()

    return (
        <>
            <header className="header">
                <div className="header__logo"></div>

                <div className="header__wallet">{tg?.initDataUnsafe?.user.username}</div>
            </header>
        </>
    );
};

export default Header;