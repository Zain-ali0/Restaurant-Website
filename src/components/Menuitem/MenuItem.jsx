import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p  style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p >{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p  style={{ color: '#fff' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
