import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header.scss";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const [shrink, setShrink] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header" className={` ${shrink ? "header--shrink" : ""}`}>
            <div className="header container">
                <ul className="header__list">
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"#"}>
                            СЛАДКИЕ ДНИ
                        </NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"#"}>
                            подарочные наборы
                        </NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"#"}>
                            Собрать набор
                        </NavLink>
                    </li>
                </ul>
                <div className="header__logo">
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="header__list">
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"#"}>
                            Создать дизайн
                        </NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"#"}>
                            КОМПАНИЯМ
                        </NavLink>
                    </li>
                    <li className="header__list__item">
                        <NavLink className={"header__list__link"} to={"#"}>
                            ВЕСЬ КАТАЛОГ
                        </NavLink>
                    </li>
                </ul>
                <FaBars className="header__bar" />
            </div>
        </header>
    );
};

export default Header;
