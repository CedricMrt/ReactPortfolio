import ConfigButton from "./ConfigButton/ConfigButton";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import NavAccess from "./NavAccess/NavAccess";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const classShowNav = burgerMenuOpen ? "show-nav" : "";

  return (
    <header className='header'>
      <nav
        className={`navbar  ${classShowNav}`}
        role='navigation'
        aria-label='menu-principal'
      >
        <HeaderLogo />
        <NavAccess
          classShowNav={classShowNav}
          toggleBurgerMenu={toggleBurgerMenu}
        />
        <ConfigButton />
      </nav>
    </header>
  );
}

export default Header;
