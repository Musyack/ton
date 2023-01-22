import React from 'react';
import play from '../../../assets/img/play.png'
import trofey from '../../../assets/img/trofey.png'
import learn from '../../../assets/img/learn.png'
const Home = () => {
    return (
        <>
        <main>
            <div className="play">
                <div className="play__left">
                    <h1 className="play__title">
                        Free <br />
                        <span>to play</span>
                    </h1>
                    <button className="btn-red">Играть</button>
                </div>
                <div className="play__img">
                    <img src={play} alt="" />
                </div>
            </div>
            <div className="rating">
                <div className="rating__top">
                    <h2 className="rating__title">
                        Рейтинг <br />
                        предсезонки
                    </h2>
                    <div className="rating__img">
                        <img src={trofey} alt="" />
                    </div>
                </div>
                <ul className="rating__table">
                    <li className="rating__item">Место</li>
                    <li className="rating__item">Никнейм</li>
                    <li className="rating__item">Кол-во фишек</li>
                    <li className="rating__item rating__item--place rating__item--place--1">
                        1
                    </li>
                    <li className="rating__item rating__item--nick">Nickname</li>
                    <li className="rating__item rating__item--chip">276</li>
                    <li className="rating__item rating__item--place rating__item--place--2">
                        2
                    </li>
                    <li className="rating__item rating__item--nick">Nickname</li>
                    <li className="rating__item rating__item--chip">276</li>
                    <li className="rating__item rating__item--place rating__item--place--3">
                        3
                    </li>
                    <li className="rating__item rating__item--nick">Nickname</li>
                    <li className="rating__item rating__item--chip">276</li>
                    <li className="rating__item rating__item--place">250</li>
                    <li className="rating__item rating__item--nick">Nickname</li>
                    <li className="rating__item rating__item--chip">276</li>
                </ul>
                <a href="" className="rating__all"
                >Смотреть весь список
                    <span
                    ><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
              <path
                  d="M10 17L15 12"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <path
                  d="M15 12L10 7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <defs>
                <clipPath id="clip0_429_11254">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs></svg></span
                    ></a>
            </div>
            <div href="" className="learn">
                <div className="learn__img">
                    <img src={learn} alt=""/>
                </div>
                <div className="learn__desc">
                    <div className="learn_wrap">
                        <h3 className="learn__title">Обучение</h3>
                        <span className="learn__sub">Базовые правила игры</span>
                    </div>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#fff">
                        <path
                            d="M10 17L15 12"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15 12L10 7"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <defs>
                            <clipPath id="clip0_429_11254">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs></svg>
                        </div>
                    </div>
                    <div className="more">
                        <h2>Больше <br/> паков</h2>
                        <a href="" className="btn-red">Перейти</a>
                    </div>

            </main>
        </>
    );
};

export default Home;