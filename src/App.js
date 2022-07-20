// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  //change modes..................
  const [mode, setMode] = useState({clr:"light"})
  const switchToDark=()=>{
    if(mode.clr==='light'){
      setMode(
        {clr:"dark"})
        document.body.style.backgroundColor = '#140e26';
      }
      else{
      setMode(
        {clr:"light"})
        document.body.style.backgroundColor = 'white';
        
      }
    }
    const switchToBlue=()=>{
        setMode({clr:"primary"})
        document.body.style.backgroundColor = '#abc8f5';
    }
    const switchToGreen=()=>{
        setMode({clr:"success"})
        document.body.style.backgroundColor = '#81eb8c';
  }
 

  //alerts..................
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} switchToBlue={switchToBlue} switchToGreen={switchToGreen} switchToDark={switchToDark}/>
      <Alert alert={alert}/>
      <div className="container">
        {/* <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text below to analyze" showAlert={showAlert} mode={mode}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes> */}
        <TextForm heading="Enter your text below to analyze" showAlert={showAlert} mode={mode}/>
        {/* <About mode={mode}/> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
