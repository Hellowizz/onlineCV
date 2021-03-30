import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

/* IMAGES */
import progIcon from '../img/icons/prog.svg';
import progIconWhite from '../img/icons/prog_blanc.svg';
import designIcon from '../img/icons/design.svg';
import designIconWhite from '../img/icons/design_blanc.svg';
import persoIcon from '../img/icons/perso.svg';
import persoIconWhite from '../img/icons/perso_blanc.svg';

const styles = {
  isSelected : {
    backgroundColor: '#4A4861',
    borderColor: '#4A4861',
    color: 'white'
  }
};

const explanations = [
  { name : 'Programmation :',
    main : <div>React.js <i>(Redux, Jest, Hooks)</i>, Javascript, HTML, CSS, Java, C++, Python, C#</div>,
   more : <div style={{fontStyle : 'italic', marginTop:'5px'}}>Mes langages favoris sont les langages Web et ceux orientés objet.</div>},
  { name :  'Design :',
    main : <div>Illustrator, Photoshop, After Effect, Clip Studio Paint, InDesign, Blender</div>,
   more : <div style={{fontStyle : 'italic', marginTop:'5px'}}>J'aime associer mes compétences en UX/UI design à la programmation.</div>},
  { name : 'Personnalité :',
    main : <div>Créative, Organisée, Positive, Sociable, Sensible, Motivée</div>,
   more : <div/>}
];

export default function Competences () {
  const [currentShowedCompetence, setcurrentShowedCompetence] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const allCompetences = explanations.map(exp =>
    <div>
      <div style={{ margin: '15px 0'}}>
        <div className="competences-explaination-title" data-testid="competence-name">{exp.name}</div>
          <div>
            {exp.main}
            {exp.more}
          </div>
      </div>
    </div>
  )

  return (
    <div className="competences-container">

      <h1 className="myName">COMPETENCES</h1>
      {!isTabletOrMobile && <div className="infos">
        <div style={{ fontSize: '20px' }}>survolez une section pour en savoir plus</div>
      </div>}

      { !isTabletOrMobile && <div className="competences-icons-container">
        <div className="competences-section-container" style={currentShowedCompetence === 0 ? styles.isSelected : null} onMouseOver={() => setcurrentShowedCompetence(0)}>
          {currentShowedCompetence !== 0 ? <img alt="prog-icon" src={progIcon} style={{ height: '132px', marginBottom: '20px'}}/>
          : <img alt="prog-icon-white" src={progIconWhite} style={{ height: '132px', marginBottom: '20px'}}/>}
          <div className="part-name">Programmation</div>
        </div>
        <div className="competences-section-container" style={currentShowedCompetence === 1 ? styles.isSelected : null} onMouseOver={() => setcurrentShowedCompetence(1)}>
          {currentShowedCompetence !== 1 ? <img alt="design-icon" src={designIcon} style={{ height: '125px', marginBottom: '20px'}}/>
          : <img alt="design-icon" src={designIconWhite} style={{ height: '125px', marginBottom: '20px'}}/>}
          <div className="part-name">Design</div>
        </div>
        <div className="competences-section-container" style={currentShowedCompetence === 2 ? styles.isSelected : null} onMouseOver={() => setcurrentShowedCompetence(2)}>
          {currentShowedCompetence !== 2 ? <img alt="perso-icon" src={persoIcon} style={{ height: '125px', marginBottom: '20px'}}/>
          : <img alt="perso-icon" src={persoIconWhite} style={{ height: '125px', marginBottom: '20px'}}/>}
          <div className="part-name">Personnalité</div>
        </div>
      </div>}

      {!isTabletOrMobile && <div className="competences-explaination-contaiter">
        <div className="competences-explaination-title" data-testid="competence-name">{explanations[currentShowedCompetence].name}</div>
        {currentShowedCompetence !== -1 &&
          <div>
            {explanations[currentShowedCompetence].main}
            {explanations[currentShowedCompetence].more}
          </div>
        }
      </div>}

      {isTabletOrMobile && allCompetences  }

    </div>
  );
}
