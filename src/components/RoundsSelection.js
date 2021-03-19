import React, { useState, useEffect } from 'react';

const styles = {
    selected : {
        backgroundColor: '#4A4861'
    }
};

export default function RoundSelection({idSelected, changeIdSelected}) {
  return (
    <div>
        <div className="round" onClick={() => changeIdSelected(0)} style={idSelected === 0 ? styles.selected : null}/>
        <div className="round" onClick={() => changeIdSelected(1)} style={idSelected === 1 ? styles.selected : null}/>
        <div className="round" onClick={() => changeIdSelected(2)} style={idSelected === 2 ? styles.selected : null}/>
        <div className="round" onClick={() => changeIdSelected(3)} style={idSelected === 3 ? styles.selected : null}/>
    </div>
  );
};
