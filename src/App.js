import './reset.css'
import Banner from "./Componentes/Banner";
import LojaGames from "./Componentes/Nav";
import Products from './Componentes/Produtos';
import Newsletter from './Componentes/NewsLetter';
import Footer from './Componentes/Footer';


function App() {
  return (
    <div>
      <LojaGames />
      <Banner />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
