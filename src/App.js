import logo from './logo.svg';
import './App.css';

/* COMPONENTS IMPORT */
import DrawingSection from './components/DrawingSection.js';
import InfosSection from './components/InfosSection.js';

/* IMAGES */
import img1 from './img/water.png';
import img2 from './img/charlie.png';
import img3 from './img/cély.png';
import img4 from './img/linkedhaters.png';
import img5 from './img/lio.png';
import img6 from './img/promare.png';
import img7 from './img/ykus.png';
import img8 from './img/fire.png';
import img9 from './img/kinui.png';
import img10 from './img/kurai.png';

const tabOfImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function App() {
	return (
		<div className="App">
		    <InfosSection />
		    <DrawingSection tabImgs={tabOfImgs} duration={6}/>
		</div>
	);
}

export default App;
