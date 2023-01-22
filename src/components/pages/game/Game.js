import React from 'react';

const Game = () => {
    return (
        <>
            <main>
                <div className="opponent">
                    <div className="opponent__container">
                        <p className="opponent__text">
                            В режиме случайной игры вы сможете найти оппонента для одной из
                            собранных вами и гровых рук
                        </p>
                    </div>
                    <h2 className="opponent__title">
                        Подбор <br/>
                        противника
                    </h2>
                    <a href="" className="btn-red opponent__link">Начать</a>
                </div>
            </main>
        </>
    );
};

export default Game;