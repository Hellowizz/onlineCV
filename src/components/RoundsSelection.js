import React from 'react';

const styles = {
    selected : {
        backgroundColor: '#4A4861'
    }
};

export default function RoundSelection({zones, idSelected, changeIdSelected}) {
  const rounds = zones.map((z, id) => <div className="round" key={id} onClick={() => changeIdSelected(id)} style={idSelected === id ? styles.selected : null}/>);
  return (
    <div>
        {rounds}
    </div>
  );
};
