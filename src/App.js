import * as React from "react";
import './App.css';
import HeaderBar from "./components/Header"
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Projects from "./views/Projects";

import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <HeaderBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/Projects" element={<Projects/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
