import React from 'react';
import './TripleInfoBox.css';
import InfoBox from './InfoBox';
import add_icon from './Images/icon-add.svg';
import filter_icon from './Images/icon-filter.svg';
import checkmark_icon from './Images/icon-checkmark.svg';

function TripleInfoBox() {
  return (
    <div>
        <div className="container">
            <InfoBox icon={add_icon} title={"Game Collection"} description=
              {"Your whole collection in one place. Add any game you want."}/>
            <InfoBox icon={filter_icon} title={"Filtering"} description=
              {"Filter your shelf by game length, console, or title. Stay organized."}/>
            <InfoBox icon={checkmark_icon} title={"Backlogs"} description=
              {"Clear your backlog by marking off games you've beaten."}/>
        </div>
    </div>
  );
}

export default TripleInfoBox;
