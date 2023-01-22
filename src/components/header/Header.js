import React from 'react';





const Header = () => {

    const tg = window.Telegram.WebApp

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            {/*<span className={'username'}>{user.username}</span>*/}
            {tg.initDataUnsafe?.user.username}
        </div>
    );
};

export default Header;