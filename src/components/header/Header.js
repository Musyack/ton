import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";





const Header = () => {


    const {onClose, tg} = useTelegram()
    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            {/*<span className={'username'}>{user.username}</span>*/}
            {tg.initData}
        </div>
    );
};

export default Header;