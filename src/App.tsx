import React from 'react';
import './App.scss';
import {Login} from "./components/Login/Login";
import {PageNotFound} from "./components/404/PageNotFound";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "./util/path";
import {MainPage} from "./components/MainPage/MainPage";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.MAIN_PAGE} element={<MainPage/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.ERROR_PAGE} element={<PageNotFound/>}/>
                <Route path='*' element={<Navigate to={"404"}/>}/>
            </Routes>

        </div>
    );
}

export default App;
