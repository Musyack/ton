import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";

const Settings = () => {
    const {user, onClose} = useTelegram()

    return (
        <>
            <main>
                <div className="settings">
                    <div className="settings__top top-settings">
                        <h2 className="settings__title">Settings</h2>
                        <ul className="settings__list">
                            <li className="settings__item">
                                <label htmlFor="volume" className="settings__label">Sounds</label>
                                <input
                                    className="settings__switch"
                                    type="checkbox"
                                    name=""
                                    id="volume"
                                />
                            </li>
                            <li className="settings__item">
                                <label htmlFor="music" className="settings__label">Music</label>
                                <input
                                    className="settings__switch"
                                    type="checkbox"
                                    name=""
                                    id="music"
                                />
                            </li>
                            <li className="settings__item">
                                <label htmlFor="notifications" className="settings__label"
                                >Notifications</label
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
                        <h2 className="settings__title">Community</h2>
                        <ul className="settings__list">
                            <li className="settings__item">
                                <a href="https://toncaps.io/eng" htmlFor="volume" className="settings__label">Site</a>
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
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="settings__item">
                                <a href="https://toncaps.io/eng" htmlFor="music" className="settings__label">Telegram Eng</a>
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
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="settings__item">
                                <a href="/" htmlFor="notifications" className="settings__label">Twitter</a>
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
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <clipPath id="clip0_429_11254">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className="settings__item">
                                <a href="/" htmlFor="notifications" className="settings__label">Discord</a>
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
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15 12L10 7"
                                        stroke="#fff"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
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
                        <h2 className="settings__title">Account</h2>
                        <div className="settings__wallet">
                            <div className="wallet__left">
                                <span className="wallet__id">Nickname</span>
                                <span className="wallet__id--value">{user?.username}</span>
                            </div>
                            <button className="btn-red" onClick={onClose}>Exit</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Settings;