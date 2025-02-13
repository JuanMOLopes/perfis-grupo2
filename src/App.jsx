import "./App.css";
import Header from "./components/Header/Header";
import Logo from "./assets/logo.png";
import Agatha from "./assets/Agatha.png";
import Ana from "./assets/Ana.png";
import Zayra from "./assets/Zayra.png";
import Anubis from "./assets/Anubis.png";
import Lucas from "./assets/Lucas.png";
import Juan from "./assets/Juan.png";

function App() {
  return (
    <>
      <Header desafio="DESAFIO 1 de PROPS - REACT" logo={Logo}/>
    </>
  );
}

export default App;
