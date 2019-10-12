import React from 'react';
import { Layout, Icon } from 'antd';
// import Footer from '../../../Components/Footer'
import AWS from '../../../images/AWS.png';
import JS from '../../../images/JavaScript-logo.png';
import TS from '../../../images/ts.png';
import Node from '../../../images/nodejs-new-pantone-black.png';
import GraphQL from '../../../images/GraphQL_Logo.svg.png';
import ReactLogo from '../../../images//react.png';
import HTML from '../../../images/1200px-HTML5_logo_and_wordmark.svg.png';
import CSS from '../../../images/CSS3_logo_and_wordmark.svg.png';
import './Home.scss';

const { 
  // Header,
   Content, Footer } = Layout;

const Home: React.FC = () => {
  return (
    <Layout>
      <Content>
        <section className="developer-synopsis-container">
          <div>
            {/* Should go to line 41 */}
            <p>
              I am Full Stack developer specializing in React, Javascript,
              Typescript, AWS, Node and many other technologies. Currently I
              work for a company called Partnet as a Full Stack Developer. Our
              current contract is for the ICON (Integrated Casting Online
              Network) portal.
            </p>
              <strong>School:</strong>
              <p>

              I was recently accepted into Utah Valley
              University and plan to start studying in the Spring, 2019.
              </p>
          </div>
        </section>
        <section>
          <div className="developer-skills-images">
            <ul>
              <li>
                <img src={ReactLogo} alt="React" />{' '}
              </li>
              <li>
                <img src={AWS} alt="AWS" />{' '}
              </li>
              <li>
                <img src={GraphQL} alt="GraphQL" />{' '}
              </li>
              <li>
                <img src={Node} alt="Node" />{' '}
              </li>
              <li>
                <img src={JS} alt="Javascript" />{' '}
              </li>
              <li>
                <img src={TS} alt="Typescript" />{' '}
              </li>
              <li>
                <img src={HTML} alt="HTML5" />{' '}
              </li>
              <li>
                <img src={CSS} alt="CSS" />{' '}
              </li>
            </ul>
          </div>
        </section>
        <div className="action-alert-userScroll">
          <Icon type="down" className="action-alert-downArrow" />
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?{' '}
        </p>
      </Content>
      <Footer className="home-page-footer">
        <div className="social-media-container">
          <a href="https://github.com/BrianDorado">
            <Icon type="github" className="social-media-icon" />
          </a>
          <a href="https://twitter.com/Pandamanatee">
            <Icon type="twitter" className="social-media-icon" />
          </a>
          <a href="https://www.linkedin.com/in/larsonbrianj/">
            <Icon type="linkedin" className="social-media-icon" />
          </a>
        </div>
      </Footer>
    </Layout>
  );
};

export default Home;
