import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const Header = (props) => {
  const logout = () => {
    props.logout();
  };

  return (
    <header className={s.header}>
      {props.isAuth ? (
        <div>
          {props.login} <button onClick={logout}>LOGOUT</button>{" "}
        </div>
      ) : (
        <NavLink to={"/login"}>lOGIN</NavLink>
      )}
    </header>
  );
};

export default connect(null, { logout })(Header);
