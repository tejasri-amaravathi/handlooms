import "./App.css";
import Tabs from "./components/Tabs/tabs.js";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo"/>
      <Tabs />
    </div>
  );
}

export default App;
