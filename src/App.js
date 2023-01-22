import React, {useEffect} from 'react';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import {Route, Routes} from "react-router-dom";
import Game from "./components/pages/game/Game";
import MyPacks from "./components/pages/my-packs/MyPacks";
import Packs from "./components/pages/packs/Packs";
import Settings from "./components/pages/settings/Settings";
import {useTelegram} from "./hooks/useTelegram";

const App = () => {

    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])
    return (
        <>
            <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'game'} element={<Game/>}/>
                    <Route path={'mypacks'} element={<MyPacks/>}/>
                    <Route path={'buy'} element={<Packs/>}/>
                    <Route path={'settings'} element={<Settings/>}/>
                </Routes>
            <Footer/>

        </>



    );
};

export default App;