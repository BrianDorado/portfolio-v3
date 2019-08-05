import React from 'react';
import {Link} from 'react-router-dom'
import { projectsRoute, aboutRoute, skillsRoute, kataRoute, contactRoutes } from '../../Config/Navigation/routes';
import './TopNav.scss'


const TopNav: React.FC = () => {
    return (
        <nav className='header-navigation' >
            <span>BL</span>
            <h2>FULL STACK DEVELOPER</h2>
            <ul>
                <li><Link to={projectsRoute}>Projects</Link></li>
                <li> <Link to={aboutRoute}>About</Link> </li>
                <li><Link to={skillsRoute}>Skills</Link></li>
                <li><Link to={kataRoute}>Kata</Link> </li>
                <li><Link to={contactRoutes}>Contact</Link> </li>
            </ul>
        </nav>
    )
}

export default TopNav