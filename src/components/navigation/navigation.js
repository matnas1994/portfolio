import React, {useRef} from "react";
import Scrollspy from 'react-scrollspy';
import './navigation.scss';

const navLinks = [
    { name: 'about_me', href: '#about_me', title: 'About me'},
    { name: 'skills', href: '#skills', title: 'Skills'},
    { name: 'projects', href: '#projects', title: 'Projects'},
    { name: 'contact', href: '#contact', title: 'Contact'}

];

const Navigation = () => {
    const navbarToggler = useRef(null);

    const navTogglerHandler = () => {
        return navbarToggler.current.checked = false;
    };

    const navItems = navLinks.map(link => (
        <li key={link.name} className="navbar__item"> 
            <a className="navbar__link" href={link.href} onClick={navTogglerHandler}>{link.title}</a>
        </li >  
    ));

    return (
       <>
         <input type="checkbox" id="navbar-toggler" ref={navbarToggler}/>  
         <nav className="navbar">
            <label htmlFor="navbar-toggler" className="navbar__toggler">
                <i className="navbar__toggler-icon"></i>
            </label>  
            <Scrollspy className="navbar__item-list" items={navLinks.map(link => link.name)} currentClassName="navbar__item--current" offset={-50}>  
                {navItems} 
            </Scrollspy>
         </nav>
        </>
    )
}
    

export default Navigation;
