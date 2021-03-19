import React, { useState, useEffect } from 'react';

/* CSS */
import './InfosSection.css';

/* COMPONENT IMPORTS */
import Rounds from './RoundsSelection.js';
import Presentation from './Presentation.js';
import Competences from './Competences.js';
import Experiences from './Experiences.js';

const diffZones = [
  <div className="info-zone"><Presentation /></div>,
  <div className="info-zone"><Competences /></div>,
  <div className="info-zone"><Experiences /></div>,
  <div className="info-zone">BOUM</div>,
];

const styleTransition = (id) => {
    let transform;
    if(id === 0) {
        transform = '0';
    } else {
        transform = '-' + id.toString() + '00%';
    }
    return 'translateY(' + transform + ')';
};

export default function InfosSection() {
  const zonesLength = diffZones.length - 1;
  const [currentSectionId, setCurrentSectionId] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [scrollY, setScrollY] = useState(0);

  useEffect(function subscribeToWheelEvent() {
    const updateScroll = function(e) {
      if(!!e.deltaY) {
        setScrollY(e.deltaY);
      } else {
        console.log('zero', e.deltaY);
      }
    }
    window.addEventListener('mousewheel', updateScroll);
    return function () {
      window.removeEventListener('mousewheel', updateScroll);
    }
  }, []);

  useEffect(() => {
    var now = Date.now();
    var dt = now - lastUpdate;
    if (scrollY > 0 && currentSectionId < zonesLength  && dt > 700) {
      setCurrentSectionId(currentSectionId + 1);
    } else if (scrollY < 0 && currentSectionId > 0  && dt > 700) {
      setCurrentSectionId(currentSectionId - 1);
    }
    setScrollY(0);
    if(dt>700) setLastUpdate(now);
  },[scrollY])

  const zones = diffZones.map((zone, id) => (
            <div style={{ width: '100%', height: '100%' }} key={id}>{zone}</div>
        ));

  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'block', height: '100%', transform: styleTransition(currentSectionId), transition: '.7s'}}>{zones}</div>
      <div className="stepper-rouds">
        <Rounds idSelected={currentSectionId} changeIdSelected={setCurrentSectionId}/>
      </div>
    </div>
  );
};
