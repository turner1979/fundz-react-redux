import React from 'react';
import './Home.scss';

import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import Logo from '../../components/logo/Logo';
import Version from '../../components/version/Version';

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__logo">
          <Logo alt />
        </div>
        <div className="home__version">
          <Version />
          </div>
        <div className="home__button">
          <Button />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
