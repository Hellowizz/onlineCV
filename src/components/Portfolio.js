/* IMAGES */
import hellowizzImg from '../img/hellowizz.png';
import movieKwizzImg from '../img/moviekwizz.png';

export default function Portfolio () {
  return (
    <div className="portfolio-container">

      <h1 className="title">Portfolio</h1>

      <div className="projects-container">
        <div>
          <a href="http://hellowizz.fr/"><div className="project" style={{background : 'center/cover no-repeat url(.' + hellowizzImg + ')'}} /></a>
          <div className="project-name">Hellowizz links</div>
          <div className="project-details">Site fait pour mes liens d'artiste fait en React.js</div>
        </div>
        <div>
          <a href="https://github.com/Hellowizz/Hello-Movie-Kwizz"><div className="project" style={{background : 'center/cover no-repeat url(.' + movieKwizzImg + ')'}} /></a>
          <div className="project-name">Hello Movie Kwizz</div>
          <div className="project-details">Jeu de devinettes sur des films fait en React.js</div>
        </div>
      </div>

    </div>
  );
}
