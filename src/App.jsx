import NavBar from "./components/navbar/NavBar";
import "./App.scss";

import pepe from "../src/assets/img/pepe.png";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="app">
      <div className="container">
        <NavBar />

        <div className="intro">
          <div className="container">
            <p>You slept on my Dad, don't sleep on me.</p>
            <img src={pepe} alt="pepe" />

            <h1>Little Pepe</h1>

            <div className="intro__text">
              <p>
                Little PEPE is built on the BSC network and is a
                community-driven project.
              </p>
              <p>
                Connect wallet, claim airdrop and refer your friends to enjoy an
                uneding benefit of LittlePepe
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <Form />

        <div className="referal">
          <div className="container">
            <input type="text" placeholder="your referal link" />
            <button>Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
