import "./App.css";
import Footer from "./components/Footer/Footer";
import Agatha from "./assets/Agatha.png"
import Ana from "./assets/Ana.png"
import Zayra from "./assets/Zayra.png"
import Anubis from "./assets/Anubis.png"
import Lucas from "./assets/Lucas.png"
import Juan from "./assets/Juan.png"
import instagram from "./assets/insta.png"
import gmail from "./assets/gmail.png"

function App() {
  return (
    <>
   
      <Footer texto1="Juan_Molopes.104🤳" insta={instagram} texto2="Juan.molopes@gmail.com 💻" gmail={gmail} texto3="O responsavel pelo desenvolvimento foi Juan Molopes.🎉"/>

    </>
  );
}

export default App;
