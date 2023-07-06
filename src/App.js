import logo from './logo.svg';
import './App.css';

function App() {

  function toConverter(){
    window.location.href="https://larrywongkahei.github.io/PDFConverter/"
  }

  function toHayStore(){
    window.location.href="https://haystore.herokuapp.com/"
  }

  function toJsonMaker(){
    window.location.href="https://larrywongkahei.github.io/JsonDataMaker/"
  }

  function toMentorShip(){
    window.location.href="https://larrywongkahei.github.io/JsonDataMaker/"
  }

  return (
    <div>
      <div className='introduction'>
          <p className='jsonMakerIntroduction' onClick={toJsonMaker}>
          JsonMaker
          </p>
          <p className='hayStoreIntroduction' onClick={toHayStore}>
          HayStore
          </p>
          <p className='mentorShipIntroduction' style={{pointerEvents:"none"}}>
          MentorShip<span> (Coming soon)</span>         
          </p>
          <p className='converterIntroduction' onClick={toConverter}>
          Converter        
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
        <div className='jsonMaker' onClick={toJsonMaker}/>
      </div>
      <div class='hayStorePlanet'>
      <div className='hayStore' onClick={toHayStore}/>
      </div>
      <div class='mentorShipPlanet'>
        <div className='mentorShip'/>
      </div>
      <div class='converterPlanet'>
        <div className='converter'onClick={toConverter}/>
      </div>
    </div>
    </div>
  );
}

export default App;
