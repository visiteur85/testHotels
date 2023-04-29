import {ButtonHTMLAttributes} from "react";
import style from './UniversalButton.module.scss'
import {useAppSelector} from "../../store/store";
import {appStatus} from "../../store/selectors";


type ButtonType = {
    isValid:boolean

} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({isValid,...props}:ButtonType) => {
    const isLoading = useAppSelector(appStatus).isLoading

    if (isLoading) isValid = !isValid


    return (

        <button disabled={!isValid} className={`${isValid ? style.button : style.buttonNotValid}`} {...props}>{props.children}</button>
    );
};

