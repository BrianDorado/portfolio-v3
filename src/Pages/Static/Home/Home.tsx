import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Home.scss';

// const {Header, Content, Footer, Sider} = Layout

const Home: React.FC = () => {
  return (
    <Layout>
      <section className='developer-synopsis-container'>
        <div>
          <p>My name is Brian, and I am a full stack developer! </p>
        </div>
      </section>
      <div className="action-alert-userScroll">
        <Icon type="down" className="action-alert-downArrow" />
      </div>
    </Layout>
  );
};

export default Home;
