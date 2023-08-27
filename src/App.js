import React, {useState, useEffect} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro,temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

// console.log(temaClaro,temaOscuro)


function App() {
  // const [tema,setTema] = useState(true)
  // const toggleTema = () =>{
  //   setTema((tema)=>!tema)
  // }

  const [tema, setTema] = useState(()=>{
    const temaGuardado = localStorage.getItem ("tema");
    return temaGuardado ? JSON.parse(temaGuardado) : true;
  });

  useEffect(()=> {
    localStorage.setItem("tema", JSON.stringify(tema));
  });

  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro:temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
