import React from 'react';
import './Footer.scss';

function Footer() {
  const startYear = 2020;
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright &copy; { year === startYear ? startYear : startYear + ' - ' + year }</p>
      <a href="http://www.scottturner.co.uk" target="_blank" rel="noopener noreferrer">www.scottturner.co.uk</a>
    </div>
  );
}

export default Footer;