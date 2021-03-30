import SorbonneLogo from '../img/sorbonne.png';
import GustaveLogo from '../img/gustave.png';

export default function Experiences () {
  return (
    <div className="experiences-container">

      <h1 className="title">Formation</h1>

      <div className="experiences-wrapper">

      <div className="experience-wrapper" style={{ marginRight: '40px'}}>
        <div className="experience-title">BAC Scientifique<span style={{ fontSize: '33px', marginLeft: '5px' }}>[2013]</span></div>
        <div className="experience-subtitle" style={{marginBottom: '60px'}}>
          <div style={{ fontWeight: '600', marginBottom: '5px'  }}>Lycée Rodin - Paris <span style={{ fontFamily: 'calibri', fontWeight: 600 }}>13</span></div>
        </div>
      </div>

      <div className="experience-wrapper" style={{ marginRight: '40px'}}>
        <div className="experience-title">L1 et L2 informatique</div>
        <div className="experience-title" style={{ fontSize: '33px', marginTop: '0px'}}>[2013 - 2015]</div>
        <div className="experience-subtitle">
          <div style={{ fontWeight: '600', marginBottom: '5px'  }}>Université Pierre et Marie Curie</div>
           <img alt="sorbonne-logo" src={SorbonneLogo} style={{ height: '60px', marginTop: '15px'}}/>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-title">IMAC <span style={{ fontSize: '33px', marginLeft: '5px' }}>[2015- 2018]</span></div>
        <div className="experience-subtitle">
          <div style={{ fontWeight: '600', marginBottom: '5px' }}>École d’Ingénieur alliant informatique et arts à l’université Paris Est Marne-la-vallée</div>
          <img alt="gustave-logo" src={GustaveLogo} style={{ height: '40px', marginTop: '15px'}}/>
        </div>
      </div>

      </div>

    </div>
  );
}
