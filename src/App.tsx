import React, {useEffect} from 'react';
import './App.scss';
import {Login} from "./components/Login/Login";
import {PageNotFound} from "./components/404/PageNotFound";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "./util/path";
import {MainPage} from "./components/MainPage/MainPage";
import {CircularProgress} from "@mui/material";
import {useAppDispatch, useAppSelector} from "./store/store";
import {appStatus} from "./store/selectors";
import {isInitializedAC} from "./store/reducers/app-reducer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(appStatus).isInitialized
    useEffect(() => {
        setTimeout(() => {
            dispatch(isInitializedAC(false))
        }, 1500)

    })

    if (isInitialized) {
        return <div style={{width: '100%', textAlign: 'center', position: 'fixed', top: '50%'}}>
            <CircularProgress size={100} color="success" />
        </div>
    }


    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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
