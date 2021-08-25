import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton/NavButton";
import {
  AiOutlineHome,
  AiOutlineMessage,
  BiNews,
  BsMusicPlayer,
  FiSettings,
  FiUsers,
  HiOutlineMusicNote,
} from "react-icons/all";

const Navbar = () => {
  return (
    <div className={s.side_bar}>
      <img
        className={s.logo}
        src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
      />
      <nav>
        <NavButton link={"/profile"} label="Profile" icon={<AiOutlineHome />} />
        <NavButton
          link={"/dialogs"}
          label="Messages"
          icon={<AiOutlineMessage />}
        />
        <NavButton link={"/mews"} label="News" icon={<BiNews />} />
        <NavButton link={"/users"} label="Users" icon={<FiUsers />} />
        <NavButton
          link={"/music"}
          label="Music"
          icon={<HiOutlineMusicNote />}
        />
        <NavButton link={"/settings"} label="Settings" icon={<FiSettings />} />
      </nav>
    </div>
  );
};

export default Navbar;
