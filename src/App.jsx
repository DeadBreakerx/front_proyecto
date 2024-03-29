import{ Routes, Route, NavLink } from "react-router-dom";
import Inicio from "./views/Inicio";
import Nosotros from "./views/Nosotros";
import Login from "./views/Login";

//navlink para navegar
//route runciona mejor con browser

function App() {
  
  return (
    <>
      <NavLink to="/">INICIO</NavLink>
      <NavLink to="/contacto">CONTACTO</NavLink>
      <NavLink to="/login">INGRESAR</NavLink>

      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/contacto" element={<Nosotros/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </>
  )
}

export default App
