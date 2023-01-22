import React from 'react';
import logo from '../../../assets/img/logo.jpeg'
import {Link} from "react-router-dom";
const MyPacks = () => {
    return (
        <>
            <main>
                <div className="get-packs">
                    <div className="get-packs__img">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="get-packs__info">
                        <h2 className="get-packs__title">It's empty here</h2>
                        <Link className="get-packs__btn btn-red" to={'/buy'}>
                            Where to get packs?
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MyPacks;