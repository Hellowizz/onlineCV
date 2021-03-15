import React, { useState, useEffect } from 'react';

/* CSS */
import './InfosSection.css';

/* COMPONENT IMPORTS */
import Rounds from './RoundsSelection.js';

const diffZones = [
  <div className="info-zone" style={{backgroundColor: 'red'}}>FUYA</div>,
  <div className="info-zone" style={{backgroundColor: 'pink'}}>BIM</div>,
  <div className="info-zone" style={{backgroundColor: 'blue'}}>BAM</div>,
  <div className="info-zone" style={{backgroundColor: 'magenta'}}>BOUM</div>,
];

export default function InfosSection() {
  const [currentSectionId, setCurrentSectionId] = useState(0);

  useEffect(() => {
    // make something ?
  }, [currentSectionId]);

  return (
    <div className="infos-container">
      {diffZones[currentSectionId]}
      <div className="stepper-rouds">
        <Rounds idSelected={currentSectionId} changeIdSelected={setCurrentSectionId}/>
      </div>
    </div>
  );
};
