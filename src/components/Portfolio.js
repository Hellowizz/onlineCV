/* IMAGES */
import hellowizzImg from '../img/hellowizz.png';
import movieKwizzImg from '../img/moviekwizz.png';
import tripFighterImg from '../img/tripfighter.png';

export default function Portfolio () {
  return (
    <div className="portfolio-container">

      <h1 className="title">Portfolio</h1>

      <div className="projects-container">
        <div>
          <a href="https://tripfighter.thaledric.fr/"><div className="project" style={{background : 'center/cover no-repeat url(.' + tripFighterImg + ')'}} /></a>
          <div className="project-name">Trip Fighter</div>
          <div className="project-details">Site de tourisme sur le Japon fait en React.js</div>
          <div className="project-details-more">2017</div>
        </div>

        <div>
          <a href="http://moviekwizz.hellowizz.fr"><div className="project" style={{background : 'center/cover no-repeat url(.' + movieKwizzImg + ')'}} /></a>
          <div className="project-name">Hello Movie Kwizz</div>
          <div className="project-details">Jeu de devinettes sur des films fait en React.js</div>
          <div className="project-details-more">2021</div>
        </div>

        <div>
          <a href="https://hellowizz.fr/"><div className="project" style={{background : 'center/cover no-repeat url(.' + hellowizzImg + ')'}} /></a>
          <div className="project-name">Hellowizz links</div>
          <div className="project-details">Site fait pour mes liens d'artiste fait en React.js</div>
          <div className="project-details-more">2021</div>
        </div>


      </div>

    </div>
  );
}
