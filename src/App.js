import React from 'react';
import './App.scss';

import Button from './components/button/Button';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';

function App() {
  return (
    <div className="App">
      <Header />
      <Loading />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
