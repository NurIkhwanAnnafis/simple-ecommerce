import React from 'react';
import { useNavigate, matchPath } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div 
      className={`menu-item ${size}`}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;