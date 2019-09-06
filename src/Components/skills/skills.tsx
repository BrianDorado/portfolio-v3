import React from 'react';
import { Link } from 'react-router-dom';
import JSLogo from '../../images/JavaScript-logo.png'
import HTML from '../../images/1200px-HTML5_logo_and_wordmark.svg.png'
import CSS from '../../images/CSS3_logo_and_wordmark.svg.png'
import Node from '../../images/nodejs-logo.jpg'
import GIT from '../../images/Git.png'
import SASS from '../../images/2000px-Sass_Logo_Color.svg.png'
import GraphQL from '../../images/GraphQL_Logo.svg.png'
import {
  projectsRoute,
  aboutRoute,
  skillsRoute,
  kataRoute,
  contactRoutes,
} from '../../Config/Navigation/routes';
import './TopNav.scss';

const TopNav: React.FC = () => {
  return (
  <div>
      <h2>Brian Larson - Development Skills</h2>
      Here will be images with links to relevant demonstrations of highlighted skills
      {/* Should this be a list? */}
      <div className="" >Box of Skills
          <img src={JSLogo} alt="Javascript"/>
          <img src={HTML} alt="HTML5"/>
          <img src={CSS} alt="CSS"/>
          <img src={Node} alt="Node"/>
          <img src={GIT} alt="GIT"/>
          <img src={SASS} alt="SASS / SCSS"/>
          <img src={GraphQL} alt="Graph QL"/>
      </div>
  </div>
  );
};

export default TopNav;
