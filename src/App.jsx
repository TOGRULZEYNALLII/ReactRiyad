import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="container-left">
          <div>
            <h1 className="container-left-title">Hello , I’m Riyad</h1>
          </div>
          <div>
            <h3 className="container-left-item">
              Graphic Designer, UI/UX Designer , Web Designer
            </h3>
          </div>
          <div className="button-container">
            <button className="button">Get In Touch!</button>
          </div>
          <div className="icons-img">
            <img src="assets\instagram.png" className="icon" alt="instagram" />
            <img className="icons" src="assets\cat.png" alt="catlogo" />
            <img className="icons" src="assets\twitter.png" alt="twitter" />
          </div>
        </div>
        <div className="container-right">
          <img src="assets\riyad.png" alt="riyad" className="riyad" />
        </div>
      </div>
    </>
  );
}

export default App;
