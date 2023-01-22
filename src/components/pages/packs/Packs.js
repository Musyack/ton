import React from 'react';
import packGold from '../../../assets/img/pack_gold.png'
import packFree from '../../../assets/img/pack_free.png'
const Packs = () => {
    return (
        <>
            <main>
                <div className="packs">
                    <h2 className="packs__title">Киоск</h2>
                    <ul className="packs__list">
                        <li className="packs__item">
                            <div className="packs__img">
                                <img src={packFree} alt="pack"/>
                            </div>
                            <h3 className="packs__name">FREE PACK</h3>
                            <button className="btn-red packs__btn">Купить за <span> 0,00 TON</span></button>
                        </li>
                        <li className="packs__item">
                            <div className="packs__img">
                                <img src={packGold} alt="pack"/>
                            </div>
                            <h3 className="packs__name">GOLd PACK</h3>
                            <button className="btn-red packs__btn">Купить за <span> 16,99 TON</span></button>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Packs;