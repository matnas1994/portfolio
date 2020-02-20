import React from "react"
import './footer.scss';

const Footer = () => {

  return (
    <footer className="footer">
        <div className="social">
          <a className="social__link" href="https://www.facebook.com/MateuszN94">
              <i className="social__icon fab fa-facebook-f"></i>
          </a>
          <a className="social__link" href="https://github.com/matnas1994">
              <i className="social__icon fab fa-github"></i>
          </a>
          <a className="social__link" href="https://www.linkedin.com/in/mateusz-nasi%C5%82owski-209856158/">
              <i className="social__icon fab fa-linkedin"></i>
          </a>
        </div>
        <p className="footer__text">
        © {new Date().getFullYear()}, Built with
        {` `}  <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p> 
        <p className="footer__text">Coded by Mateusz Nasilowski.</p>
        <p className="footer__text">Thank you for visiting my page.</p>
    </footer>
  )
}


export default Footer
