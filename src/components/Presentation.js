import ProfilePic from '../img/Me.png';

export default function Presentation () {
  return (
    <div className="presentation-container">
      <div>
        <div className="separator" style={{ marginBottom: '-45px'}}/>
        <h1 className="myName" data-testid="heloise">HELOISE ROUSSEL</h1>
        <div className="separator" style={{ marginTop: '-53px'}}/>
      </div>
      <div className="infos">
        <div style={{ fontSize: '25px' }}>
          <a href="mailto:heloroussel@hotmail.fr">heloroussel@hotmail.fr</a>
          <div style={{marginTop: '5px'}}>+33 6 50 22 58 98</div>
        </div>
      </div>

      <div className="avatar">
        <div className="image">
          <img alt="me-drawing" src={ProfilePic} style={{ height: '100%'}}/>
        </div>
      </div>

      <div>DÉVELOPPEUSE WEB</div>
    </div>
  );
}
