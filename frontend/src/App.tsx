import './App.css'
import Header from "./components/Header/Header.tsx";

import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home.tsx";
import New from "./pages/New.tsx";
import Open from "./pages/Open.tsx";
import Doing from "./pages/Doing.tsx";
import Done from "./pages/Done.tsx";


function App() {


  return (
    <>
        <Header/>

        <Routes>
            <Route path={"/Home"} element={<Home/>}/>
            <Route path={"/Open"} element={<Open/>}/>
            <Route path={"/Doing"} element={<Doing/>}/>
            <Route path={"/Done"} element={<Done/>}/>
            <Route path={"/New"} element={<New/>}/>
        </Routes>
    </>
  )
}

export default App
