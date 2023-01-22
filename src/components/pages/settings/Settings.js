import React from 'react';

const Settings = () => {
    return (
        <>
            <main>
                <div className="settings">
                    <div className="settings__top top-settings">
                        <h2 className="settings__title">Настройки</h2>
                        <ul className="settings__list">
                            <li className="settings__item">
                                <label htmlFor="volume" className="settings__label">Звуки</label>
                                <input
                                    className="settings__switch"
                                    type="checkbox"
                                    name=""
                                    id="volume"
                                />
                            </li>
                            <li className="settings__item">
                                <label htmlFor="music" className="settings__label">Музыка</label>
                                <input
                                    className="settings__switch"
                                    type="checkbox"
                                    name=""
                                    id="music"
                                />
                            </li>
                            <li className="settings__item">
                                <label htmlFor="notifications" className="settings__label"
                                >Уведомления</label
                                >
                                <input
                                    className="settings__switch"
                                    type="checkbox"
                                    name=""
                                    id="notifications"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="settings__middle middle-settings">
                        <h2 className="settings__title">Комьюнити</h2>
                        <ul className="settings__list">
                            <li className="settings__item">
                                <a href="" htmlFor="volume" className="settings__label">Сайт</a>
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17L15 12"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="settings__item">
                                <a href="" htmlFor="music" className="settings__label">Telegram Eng</a>
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17L15 12"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="settings__item">
                                <a href="" htmlFor="notifications" className="settings__label">Twitter</a>
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17L15 12"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="settings__item">
                                <a href="" htmlFor="notifications" className="settings__label">Discord</a>
                                <svg
                                    width="30px"
                                    height="30px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17L15 12"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        stroke-width="2.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="settings__bottom botom-settings">
                        <h2 className="settings__title">Кошелек</h2>
                        <div className="settings__wallet">
                            <div className="wallet__left">
                                <span className="wallet__id">Wallet ID</span>
                                <span className="wallet__id--value">EQB-...OrmL</span>
                            </div>
                            <button className="btn-red">Выход</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Settings;