import React from 'react';
import './App.scss';
import {Login} from "./components/Login/Login";
import {PageNotFound} from "./components/404/PageNotFound";

function App() {
    return (
        <div className="App">
            <Login/>
            <PageNotFound/>
            {/*Не забыть сделать страницу 404*/}
        </div>
    );
}

export default App;
