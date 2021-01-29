import React from 'react';

import './SubReddit.css';
import tennis from '../../Static/images/tennis1.jpg'

export function SubReddit() {

  return (
  <aside className="subred">
    <div className="tendencies">
      <img src={tennis} alt="tendencies"/>
      <h2>Predeterminado</h2>
      <p>Lo mejor</p>
    </div>
    <div className="tendencies">
      <img src={tennis} alt=""/>
      <h2>Predeterminado</h2>
      <p>Lo mejor</p>
    </div>
    <div className="tendencies">
      <img src={tennis} alt=""/>
      <h2>Predeterminado</h2>
      <p>Lo mejor</p>
    </div>
    <div className="tendencies">
      <img src={tennis} alt=""/>
      <h2>Predeterminado</h2>
      <p>Lo mejor</p>
    </div>
  </aside>
  );
}
