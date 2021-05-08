// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/navigation/Navbar";
// import Materiales from "./components/pages/Infografias";
// import Home from "./components/pages/Inicio";
// import Temas from "./components/pages/Temas";


// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Route path="/" exact component={Home} />
//       <Route path="/materiales" component={Materiales} />
//       <Route path="/temas" component={Temas}/>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import { AppRouter } from './routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

export const App = () => {
  return (
    <AppRouter />
  )
}
