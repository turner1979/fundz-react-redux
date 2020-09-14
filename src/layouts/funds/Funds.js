import React from 'react';
import { useHistory } from 'react-router-dom';
import './Funds.scss';
import Footer from '../../components/footer/Footer';
import FundCard from '../../components/fundCard/fundCard';
import Header from '../../components/header/Header';
import ContentContainer from '../../components/contentContainer/ContentContainer';
import Icon from '../../components/icon/Icon';
import Version from '../../components/version/Version';

function Funds() {
  const history = useHistory();
  const onBackClick = () => {
    history.push('/');
  }
  return (
    <div className="funds">
      <Header />
      <ContentContainer>

        <Version />
        <div className="funds__controls">
          <div onClick={() => onBackClick() }>
            <Icon iconClass="fas fa-chevron-left" />
          </div>
          <Icon iconClass="fas fa-plus" onClick={() => { console.log('TODO: set modal visibility') }} />
        </div>

        {/* TODO: modal */}
        {/* TODO: loading icon  */}
        <div className="funds__grid">
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
        </div>

        <Footer />
      </ContentContainer>
    </div>
  );
}

export default Funds;