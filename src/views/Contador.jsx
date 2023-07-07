import React, { useState } from "react";
const Contador = () => {
  //como primer parametro es la variable, y segundo parametro es la funcion
  //use state sirve para actualizar el estado y renombrar cosas
  const [nombre, setNombre] = React.useState("ALVARO");
  const [contador, setContador] = useState(0);

  const cambiarNombre = () => {
    // nombre = "Pedro";
    setNombre("Pedro");
    //alert("CLICK");
  };
  const aumentar = () => {
    setContador(contador + 1);
  };
  const reducir = () => {
    setContador(contador - 1);
  };
  //EN LOS BUTONS DEBE SER UNA FUNCION OBLIGADO O DA ERROR
  return (
    <>
      <h1>{nombre}</h1>
      <p>Hola</p>
      <button onClick={() => cambiarNombre()}>Cambiar Nombre</button>
      <hr />
      <button onClick={() => aumentar()}>+</button> <h2>{contador}</h2>{" "}
      <button onClick={() => reducir()}>-</button>
    </>
  );
};

export default Contador;
