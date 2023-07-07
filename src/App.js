import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup';

function App() {

  function toConverter() {
    window.location.href = "https://larrywongkahei.github.io/PDFConverter/"
  }

  function toHayStore() {
    window.location.href = "https://haystore.herokuapp.com/"
  }

  function toJsonMaker() {
    window.location.href = "https://larrywongkahei.github.io/JsonDataMaker/"
  }

  // function toMentorShip() {
  //   window.location.href = "https://larrywongkahei.github.io/JsonDataMaker/"
  // }

  return (
    <div>
      <div className='introduction'>
        <p className='jsonMakerIntroduction' onClick={toJsonMaker}>
          JsonMaker
        </p>
        <p className='hayStoreIntroduction' onClick={toHayStore}>
          HayStore
        </p>
        <p className='mentorShipIntroduction' style={{ pointerEvents: "none" }}>
          MentorShip<span> (Coming soon)</span>
        </p>
        <p className='converterIntroduction' onClick={toConverter}>
          Converter
        </p>

      </div>

      <div className='planetSystem'>
        <div className='firstLine' />
        <div className='secondLine' />
        <div className='thirdLine' />
        <div className='fourthLine' />
        <div className='mainPlanet'>
          <p>
            Hay's workshop
          </p>
        </div>
        <div className='jsonPlanet'>
          <Popup trigger={
            <div className='jsonMaker' />} modal nested>
            {
              <div className='PopUp'>
                <div>
                  <h3>
                    Introduction
                  </h3>
                  <p>
                    JsonDataMaker is a website that you could pick any field you want and convert your data to json format.The website provided two simple API endpoint for you to fetch for your project.
                  </p>
                </div>
                <div>
                  <h3>
                    Links
                  </h3>
                  <button onClick={() => window.location.href = "https://github.com/larrywongkahei/JsonDataMaker"}>Github Repo</button>
                  <button onClick={toJsonMaker}>Website</button>
                </div>

              </div>
            }</Popup>
        </div>
        <div class='hayStorePlanet'>
          <Popup trigger={
            <div className='hayStore'/>
          } modal nested>
            {
              <div className='PopUp'>
                <div>
                  <h3>
                    Introduction
                  </h3>
                  <p>
                  Haystore is a fake E-commerce store built with C# and ASP.Net, this is a project to showcase my skills with C# and .Net, most layout are from Amazon because the point is to make a fake amazon website.                  </p>
                </div>
                <div>
                  <h3>
                    Links
                  </h3>
                  <button onClick={() => window.location.href = "https://github.com/larrywongkahei/E-Commerce"}>Github Repo</button>
                  <button onClick={toHayStore}>Website</button>
                </div>

              </div>
            }</Popup>
        </div>
        <div class='mentorShipPlanet'>
          <Popup trigger={
          <div className='mentorShip' />
          }modal nested>
          {
            <div className='PopUp'>
              <div>
                <h3>
                  Introduction
                </h3>
                <p>
                MentorShip is a website that aims to bridge the gap between fresh graduates like us and experienced industry mentors.
                </p>
                <p>
                  Coming soon.
                </p>
              </div>
              <div>
                <h3>
                  Links
                </h3>
                <button onClick={() => window.location.href = "https://github.com/larrywongkahei/MentorShip"}>Github Repo</button>
                <button>Website</button>
              </div>

            </div>
          }</Popup>
        </div>
        <div class='converterPlanet'>
        <Popup trigger={
                    <div className='converter'/>
          }modal nested>
          {
            <div className='PopUp'>
              <div>
                <h3>
                  Introduction
                </h3>
                <p>
                PDF Converter is an application that let you to convert any format of file into PDF (Only Image format works now).
                </p>
                <p>
                  Please Note, Only image format works now.
                </p>
              </div>
              <div>
                <h3>
                  Links
                </h3>
                <button onClick={() => window.location.href = "https://github.com/larrywongkahei/PDFConverter"}>Github Repo</button>
                <button onClick={toConverter}>Website</button>
              </div>

            </div>
          }</Popup>

        </div>
      </div>
    </div>
  )
}

export default App;
