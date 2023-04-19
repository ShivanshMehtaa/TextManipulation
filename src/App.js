// import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import React, {useState} from 'react'
import About from './components/About'
import TextForm from './components/TextForm'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //wether dark mode is enabled or not

  const alertMsg = (message, type)=>{
    setAlert({
      msg : message ,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode =() =>{
    if   (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#2a2c2d'
      alertMsg('Dark Mode Enabled', "success")
      // document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "Amazing App"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Download Fast"
      // }, 1000);
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      alertMsg('Light Mode Enabled', "success")
      // document.title = "TextUtils - Light Mode"


    }
  }

  const [alert, setAlert] = useState(null);

  return (
    <>
    <BrowserRouter>
      <Navbar title = "TextUtils Home" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container m-3">
          <Routes>
            <Route exact path="/about" element={<About mode = {mode} />} />
            <Route exact path="/" element={<TextForm alertMsg = {alertMsg} heading = "Try Text Utils - WordCounter | TypeConversions" mode ={mode} />} />
          </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
