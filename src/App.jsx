import "./App.css";

import Meio from "./components/Meio/Meio";


import Logo from "./assets/logo.png";
import Agatha from "./assets/Agatha.png"
import Ana from "./assets/Ana.png"
import Zayra from "./assets/Zayra.png"
import Anubis from "./assets/Anubis.png"
import Lucas from "./assets/Lucas.png"
import Juan from "./assets/Juan.png"
import Valores from './components/valores';

function App() {
  return (
    <>
      <Meio nome="Agatha França" img={Agatha} hobby="Hobby: Ler e assistir live da Shopee"/>
      <Meio nome="Ana Beatriz" img={Ana} hobby="Hobby: Fofocar as 3am"/>
      <Meio nome="Anúbis" img={Anubis} hobby="Hobby: Programar"/>
      <Meio nome="Juan Lopes" img={Juan} hobby="Hobby: Programar"/>
      <Meio nome="Lucas Marin" img={Lucas} hobby="Hobby: Cozinhar"/>
      <Meio nome="Zayra França" img={Zayra} hobby="Hobby: Dormir"/>

      <Valores texto="Valor1Valor1Valor1Valor1Valor1Valor1Valor1Valor1" subTexto="Valor2Valor2Valor2Valor2Valor2Valor2Valor2Valor2" terceiroTexto="Valor3Valor3Valor3Valor3Valor3Valor3Valor3Valor3"/>
    </>
  );
}

export default App;
