import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';
import closeIcon from '../../Icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='online Icon' />
        <h3>{room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={closeIcon} alt='close Icon' />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
