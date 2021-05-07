import "./components/Assets/css/App.css";
import Sidebar from "./components/Navigation/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Inicio';
import Configuracion from './components/Pages/Configuracion';
import Mat from './components/Pages/Materiales';
import Temas from './components/Pages/Temas';


function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <h7 className="menu">Menu</h7> <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>

        <Sidebar show={showNav} />
        <div className="main">
          <Route path='/' exact={true} component={Home}/>
          <Route path='/materiales' exact={true} component={Mat}/>
          <Route path='/temas' exact={true} component={Temas}/>
          <Route path='/config' exact={true} component={Configuracion}/>
        </div>
      </Router>
    </>
  );
}

export default App;
