import "./App.css";

import Meio from "./components/Meio/Meio";
import Footer from "./components/Footer/Footer";

import Agatha from "./assets/Agatha.png"
import Ana from "./assets/Ana.png"
import Zayra from "./assets/Zayra.png"
import Anubis from "./assets/Anubis.png"
import Lucas from "./assets/Lucas.png"
import Juan from "./assets/Juan.png"
import Instagram from "./assets/insta.png"
import Gmail from "./assets/gmail.png"
import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      <Meio nome="Agatha França" img={Agatha} hobby="Hobby: Ler e assistir live da Shopee"/>
      <Meio nome="Ana Beatriz" img={Ana} hobby="Hobby: Fofocar as 3am"/>
      <Meio nome="Anúbis" img={Anubis} hobby="Hobby: Programar"/>
      <Meio nome="Juan Lopes" img={Juan} hobby="Hobby: Programar"/>
      <Meio nome="Lucas Marin" img={Lucas} hobby="Hobby: Cozinhar"/>
      <Meio nome="Zayra França" img={Zayra} hobby="Hobby: Dormir"/>

      <Footer texto1="JuanMOLopes.104 🤳" insta={Instagram} texto2="juan.molopes@gmail.com 💻" gmail={Gmail} texto3="O responsável pelo desenvolvimento foi JuanMOLopes.🎉"/>
    </>
  );
}

export default App;
