import React from 'react';
import {Icon} from 'antd'
import Twitter from '../../images/Black-twitter-logo.png'
import LinkedIn from '../../images/Black-LinkedIn-Logo.png'
import Github from '../../images/Github.svg'
import './Footer.scss'

const Contact: React.FC = () => {
  return (
    <footer className='home-footer'>
      {/* <a href="https://www.linkedin.com/in/larsonbrianj/">
        {' '}
        <img src={LinkedIn} alt="LinkedIn" />{' '}
      </a>
      <a href="https://github.com/BrianDorado">
        {' '}
        <img src={Github} alt="Github" />
      </a>
      <a href="https://twitter.com/Pandamanatee">
        <img src={Twitter} alt="Twitter" />
      </a> */}
      <Icon type="github" />
      <Icon type="twitter" />
      <Icon type="linkedin" />
    </footer>
  );
};

export default Contact;
