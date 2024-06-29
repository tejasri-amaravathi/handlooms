import "./App.css";
import Tabs from "./components/Tabs/tabs.js";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="logo"/>
      </div>
      <div>
        <Tabs />
      </div>
    </div>
  );
}

export default App;
