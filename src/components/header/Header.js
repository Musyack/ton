import React from 'react';

const Header = (props) => {
    return (
        <>
            <header className="header">
                <div className="header__logo"></div>
                {props.child}
                <div className="header__wallet">Nickname</div>
            </header>
        </>
    );
};

export default Header;