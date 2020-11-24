import './App.scss';
import CoreCV from './CoreCV.js';
// Images
import PhotoProfile from './img/profile-job.jpg'
import { ReactComponent as IconResume } from './img/logo-resume.svg';
// Files
import FileCV from './files/CV-johan-dumouchel-2020.pdf';

//---- Header with light menu 
function HeaderBar() {
  return (
    <div className="container header-bar">
      <IconResume title="icône représentant un CV" className="ico-resume"/>
      <h1>CV Online - Johan Dumouchel</h1>
    </div>
  );
}

//---- Website introduction with all needed informations
function IntroSite() {
  return (
    <div className="container intro-site">
      <h1>Hello World !</h1>
      <p>Bonjour et bienvenue. Ce site a été conçu comme un complément du CV. 
      Il résume les grandes lignes de mon CV 
      tout en permettant de mieux se rendre compte 
      des liens qui existent entre les différentes parties 
      (compétences, expériences pro., stack techniques et autres).
      Un CV dynamique et intuitif en soit. Une manière cohérente de mettre 
      en pratique et en avant une partie de mes compétences.</p>
    </div>
  );
}

//---- Job profile introduction 
function IntroCV() {
  return (
    <div className="container intro-cv">
        <img className="profile-picture" src={PhotoProfile} alt="profile du CV"/>
        <div className="profile-info">
          <h1>Johan Dumouchel</h1>
          <div className="profile-info-links">
            <a title="mail" href="#">johandumouchel@gmail.com</a>
            <a title="tel" href="#">06 29 70 72 08</a>
            <a title="LinkedIn" href="#">LinkedIn</a>
            <a title="GitHub" href="#">GitHub</a>
            <a title="Adresse domicile" href="#">Rue de la folie méricourt, Paris 11ème.</a>
            <a title="CV à télécharger" href={FileCV} target="blank">CV</a>
          </div>
        </div>
        <div className="profile-desc">
          <h1>Concepteur Développeur</h1>
          <p>Souriant, motivé et passionné d’informatique je suis à la recherche 
            d’une opportunité d’avenir. Mes années d’apprentissage ainsi que mes
            expériences professionnelles m’ont permis d’accumuler 5 ans d’expériences
            dans la conception et le développement d’applications web.
          </p>
      </div>        
    </div>
  );
}

//---- Profile Interest 
function Interest() {
  return (
    <div className="container interest">
      <h1>Intérêts</h1>
      <p>Informatique | Sport | KiteSurf | Voyage | Jeux vidéo |
      Musique | Passer du bon temps entre amis | Famille</p>
      <p>Merci d'avoir pris le temps de me connaître et bonne journée !</p>
    </div>
  );
}

//---- Footer to put something you don't know where to put
function Footer() {
  return (
    <div className="container footer">
      Site créé avec le Framework React et developpé par Johan Dumouchel
    </div>
  );
}

function App() {
  return (
    <div>
      <HeaderBar />
      <IntroSite />
      <IntroCV />
      <CoreCV />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
