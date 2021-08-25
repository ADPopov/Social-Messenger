import React from "react";
import s from './NavButton.module.css'
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
    return (
        <NavLink className={s.navButton}
                 activeClassName={s.active}
                 to={props.link}>
            <div className={s.icon}>
                {props.icon}
            </div>
            <p className={s.buttonText}>
                {props.label}
            </p>
        </NavLink>
    )
}

export default NavButton;
