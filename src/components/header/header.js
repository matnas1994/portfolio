import React from "react";
import Navigation from '../navigation/navigation';
import './header.scss';

const Header = ({ name,  position}) => (
  <>
    <Navigation/>
    <header className="header">
        <h1 className="header__title">{name}</h1>
        <h2 className="header__subtitle">{position}</h2>
    </header>
  </>
)

export default Header
