export default function Experiences () {
  return (
    <div className="experiences-container">

      <h1 className="title">Experiences</h1>

      <div className="experiences-wrapper">

      <div className="experience-wrapper">
        <div className="experience-title">MODULO PI <span style={{ fontSize: '33px', marginLeft: '5px' }}>[2017]</span></div>
        <div className="experience-subtitle" style={{marginBottom: '60px'}}>
          <div style={{ fontWeight: '600', marginBottom: '5px'  }}>Ajouts de fonctionnalités au logiciel de Modulo Kinetic</div>
          <div>- Beaucoup de travail sur des documentation, à comprendre les outils tiers.</div>
          <div>- Réflexion sur la mise en page des fonctionnalités sur l’application.</div>
          <div style={{ marginTop: '5px' }}><i>QtCreator, C++, Mapping, Modulo Kinetic (<span style={{ fontFamily: 'calibri', fontWeight: 600 }}>3</span> mois)</i></div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-title">EXANE <span style={{ fontSize: '33px', marginLeft: '5px' }}>[2018 - 2019]</span></div>
        <div className="experience-subtitle">
          <div style={{ fontWeight: '600', marginBottom: '5px'  }}>Développement d’une application CRM mobile from scratch en React.js</div>
          <div>- App de gestion de rendez-vous, contacts, événements et compte rendus</div>
          <div>- Travail sur tout le design et le développement front</div>
          <div>- Application gérée avec Git et Jenkins, développée sur IntelliJ</div>
          <div>- Développement en sprints d’une semaine</div>
          <div style={{ marginTop: '5px' }}><i>React.js, Redux, HTML, CSS, Java, Webservices Rest, Illustrator (<span style={{ fontFamily: 'calibri', fontWeight: 600 }}>1</span> an et <span style={{ fontFamily: 'calibri', fontWeight: 600 }}>6</span> mois)</i></div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-title">WEBTOON <span style={{ fontSize: '33px', marginLeft: '5px' }}>[2020]</span></div>
        <div className="experience-subtitle">
          <div style={{ fontWeight: '600', marginBottom: '5px' }}>Réalisation d’une bande dessinée Webtoon</div>
          <div>Étant passionnée de dessin et de bande dessinée depuis longtemps, je me suis consacrée à la réalisation d’un webtoon en <span style={{ fontFamily: 'calibri', fontWeight: 600 }}>2020</span>.</div>
          <div style={{ marginTop: '5px' }}>Cela m’a demandé de l’oganisation, de l’autonomie et de la persévérence.</div>
          <div style={{ marginTop: '5px' }}><a href='https://www.webtoons.com/fr/challenge/linked-haters/list?title_no=461285'>https://www.webtoons.com/fr/challenge/linked-haters</a></div>
        </div>
      </div>

      </div>
    </div>
  );
}
