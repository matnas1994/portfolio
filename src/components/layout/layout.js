/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";

import Header from "../header/header";
import About from "../about/about";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import "./layout.css"

const Layout = ({ children }) => {
  const name = 'Mateusz Nasilowski';
  const position = 'Full-stack developer';

  const projectsData = [{
    id:'p1',
    title:'superProject',
    description: 
      `Celem głównym projektu jest podniesienie kompetencji oczekiwanych przez pracodawców wśród 240 (139K;101M) studentów ostatnich dwóch semestrów studiów I lub II stopnia na Wydziale Zarządzania i Ekonomii Politechniki Gdańskiej, w tym 80 (47K;33M) studentów`,
    github: '',
    live: ''  
    },
    {
      id:'p2', title:'superProject',
      description: `
      Celem głównym projektu jest podniesienie kompetencji oczekiwanych przez pracodawców wśród 240 (139K;101M) studentów ostatnich dwóch semestrów studiów I lub II stopnia na Wydziale Zarządzania i Ekonomii Politechniki Gdańskiej, w tym 80 (47K;33M) studentów`,
      github: '',
      live: ''
    }
    ,{
      id:'p3',
      title:'lepszyProjekt',
      description: 'Celem głównym projektu jest podniesienie kompetencji oczekiwanych przez pracodawców wśród 240 (139K;101M) studentów ostatnich dwóch semestrów studiów I lub II stopnia na Wydziale Zarządzania i Ekonomii Politechniki Gdańskiej, w tym 80 (47K;33M) studentów',
      github: '',
      live: ''
    },
    {
      id:'p4',
      title:'workTimeRecords',
      description: 'It is an application with authentication and authorization. It is used to create a PDF about employee working time. All data is stored in a database. It was created with laravel.',
      github: '',
      live: 'http://ecpprzedszkole.freeko.pl/'
    }
  ];
  return (
    <>
      <Header name={name.toUpperCase()}  position={position.toUpperCase()}/>
        <main>
          <About/>
          <Skills/>
          <Projects projectsData={projectsData}/>
          <Contact/>
        </main>
      <Footer/>
    </>
  )
}


export default Layout
