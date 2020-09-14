import React from 'react';
import './Funds.scss';
import Header from '../../components/header/Header';
import ContentContainer from '../../components/contentContainer/ContentContainer';
import Icon from '../../components/icon/Icon';
import Version from '../../components/version/Version';

function Funds() {
  return (
    <div className="funds">
      <Header />
      <ContentContainer>
        <Version />
        <div className="funds__controls">
          <Icon iconClass="fas fa-chevron-left" onClick={() => { console.log('TODO: back') }} />
          <Icon iconClass="fas fa-plus" onClick={() => { console.log('TODO: set modal visibility') }} />
        </div>
        {/* <div class="fdz-funds__controls">
          <fdz-icon [iconClass]="'fas fa-chevron-left'" (click)="onBackClick()"></fdz-icon>
          <fdz-icon [iconClass]="'fas fa-plus'" (click)="setAddFundModalVisibility(true)"></fdz-icon>
        </div> */}
      </ContentContainer>
    </div>
  );
}

export default Funds;