import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Materiales from "./components/Pages/Infografias";
import Home from "./components/Pages/Inicio";
import Temas from "./components/Pages/Temas";


function App() {
  return (
    <Router>
      <Navbar />

      <Route path="/" exact component={Home} />
      <Route path="/materiales" component={Materiales} />
      <Route path="/temas" component={Temas}/>
    </Router>
  );
}

export default App;
