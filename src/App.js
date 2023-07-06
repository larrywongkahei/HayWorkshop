import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='introduction'>
          <p className='jsonMakerIntroduction'>
          JsonMaker
          </p>
          <p className='hayStoreIntroduction'>
          HayStore
          </p>
          <p className='mentorShipIntroduction'>
          MentorShip<span> (Coming soon)</span>         
          </p>

      </div>

    <div className='planetSystem'>
      {/* <div className='firstLine' />
      <div className='secondLine' />
      <div className='thirdLine' /> */}
      <div className='mainPlanet'>
        <p>
          Hay's workshop
        </p>
      </div>
      <div className='jsonPlanet'>
        <div className='jsonMaker' onClick={() => window.location.href="https://larrywongkahei.github.io/JsonDataMaker/"}/>
      </div>
      <div class='hayStorePlanet'>
      <div className='hayStore' onClick={() => window.location.href="https://haystore.herokuapp.com/"}/>
      </div>
      <div class='mentorShipPlanet'>
        <div className='mentorShip'onClick={() => window.location.href="https://larrywongkahei.github.io/JsonDataMaker/"}/>
      </div>
      <div class='converterPlanet'>
        <div className='converter'onClick={() => window.location.href="https://larrywongkahei.github.io/PDFConverter/"}/>
      </div>
    </div>
    </div>
  );
}

export default App;
