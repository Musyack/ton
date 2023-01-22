import React from 'react';

const Game = () => {
    return (
        <>
            <main>

                <div className="opponent">
                    <p className="opponent__text">In the random game mode, you can find an opponent for one of
                        your collected and playing hands</p>

                </div>
                <div className="opponent__contain">

                    <h2 className="opponent__title opponent__text">
                        Matchmaking
                    </h2>
                    <a href={'/'} className="btn-red opponent__link">Start</a>
                </div>

            </main>
        </>
    );
};

export default Game;