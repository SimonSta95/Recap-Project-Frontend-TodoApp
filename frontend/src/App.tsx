import './App.css'
import Header from "./components/Header/Header.tsx";

import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home.tsx";
import Open from "./pages/Open.tsx";
import Doing from "./pages/Doing.tsx";
import Done from "./pages/Done.tsx";
import Detail from "./pages/Detail.tsx";


function App() {

  return (
    <>
        <Header/>

        <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/open"} element={<Open/>}/>
            <Route path={"/doing"} element={<Doing/>}/>
            <Route path={"/done"} element={<Done/>}/>
            <Route path={"/detail/:id"} element={<Detail/>}/>
        </Routes>
    </>
  )
}

export default App