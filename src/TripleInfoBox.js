import React from 'react';
import './TripleInfoBox.css';
import InfoBox from './InfoBox';

function TripleInfoBox() {
  return (
    <div>
        <div className="container">
            <InfoBox/>
            <InfoBox/>
            <InfoBox/>
        </div>
    </div>
  );
}

export default TripleInfoBox;
