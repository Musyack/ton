import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";





const Header = () => {

    const tg = window.Telegram.WebApp
    const {onClose} = useTelegram()
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            {/*<span className={'username'}>{user.username}</span>*/}
            {tg.initDataUnsafe?.user.username}
        </div>
    );
};

export default Header;