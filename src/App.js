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
    <div className='mainContainer'>
      <div className='Header'>
        <b>H<span>a</span>y's Wo<span>rk</span>Shop</b>
      </div>
      <div className='introduction'>
        <p className='jsonMakerIntroduction' onClick={toJsonMaker}>
          JsonMaker
        </p>
        <p className='hayStoreIntroduction' onClick={toHayStore}>
          HayStore
        </p>
        <p className='mentorShipIntroduction' style={{ pointerEvents: "none" }}>
          MentorShip
        </p>
        <p className='converterIntroduction' onClick={toConverter}>
          PDFConverter
        </p>

      </div>

      <div className='planetSystem'>
        <div className='firstLine' />
        <div className='secondLine' />
        <div className='thirdLine' />
        <div className='fourthLine' />
        <div className='up' />
        <div className='mainPlanet' />
        <div className='jsonPlanet'>
          <Popup trigger={
            <div className='jsonMaker' />} modal nested>
            {
              <div className='jsonMakerPopUp'>
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
                  <button onClick={() => window.location.href = "https://github.com/larrywongkahei/JsonDataMaker"} className='popupButton'>Github Repo</button>
                  <button onClick={toJsonMaker} className='popupButton'>Website</button>
                </div>

              </div>
            }</Popup>
        </div>
        <div class='hayStorePlanet'>
          <Popup trigger={
            <div className='hayStore' />
          } modal nested>
            {
              <div className='hayStorePopUp'>
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
                  <button onClick={() => window.location.href = "https://github.com/larrywongkahei/E-Commerce"} className='popupButton'>Github Repo</button>
                  <button onClick={toHayStore} className='popupButton'>Website</button>
                </div>

              </div>
            }</Popup>
        </div>
        <div class='mentorShipPlanet'>
          <Popup trigger={
            <div className='mentorShip' />
          } modal nested>
            {
              <div className='mentorShipPopUp'>
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
                  <button onClick={() => window.location.href = "https://github.com/larrywongkahei/MentorShip"} className='popupButton'>Github Repo</button>
                  <button className='popupButton'>Website</button>
                </div>

              </div>
            }</Popup>
        </div>
        <div class='converterPlanet'>
          <Popup trigger={
            <div className='converter' />
          } modal nested>
            {
              <div className='converterPopUp'>
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
                  <button onClick={() => window.location.href = "https://github.com/larrywongkahei/PDFConverter"} className='popupButton'>Github Repo</button>
                  <button onClick={toConverter} className='popupButton'>Website</button>
                </div>

              </div>
            }</Popup>

        </div>
      </div>
    </div>
  )
}

export default App;
