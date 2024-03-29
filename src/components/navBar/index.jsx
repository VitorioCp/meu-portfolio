import React, { useState } from "react";
import { FaBars, FaDev } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.scss';
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "SOBRE",
    to: "/about",
  },
  {
    label: "HABILIDADES",
    to: "/skills",
  },
  
  {
    label: "CONTATO",
    to: "/contact",
  },
];

export const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaDev size={30} />
            <h1>Vitório Dev</h1>
          </Link>
          
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link className="navbar__container__menu__item__links" to={item.to} onClick={
                handleToggleIcon
              }>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icons" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
