import "./App.css";

import Navbar from "./components/Navbar";
import Atividades from "./components/Atividades";
import Sobre from "./components/Sobre";
import Local from "./components/Local";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Atividades />
      <Sobre />
      <Local />
      <Footer />
    </div>
  );
}

export default App;
