import {ButtonHTMLAttributes} from "react";
import style from './UniversalButton.module.scss'


type ButtonType = {
    isValid:boolean

} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({isValid,...props}:ButtonType) => {
    return (

        <button disabled={!isValid} className={`${isValid ? style.button : style.buttonNotValid}`} {...props}>{props.children}</button>
    );
};

