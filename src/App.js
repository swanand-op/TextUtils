import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

const [mode, setMode] = useState("dark");

const [btnText, setBtnText] = useState("Dark")

const [alert, setAlert] = useState(null)

const showAlert = (type, message)=> {
  setAlert({
    message: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null)
  }, 3000);
}

const toggleMode = ()=> {
  if(mode === "dark") {
    setMode("light")
    setBtnText("Dark")
    document.body.style.backgroundColor = "black"
    showAlert("Success", "Dark Mode has been enabled")
  } else {
     setMode("dark");
     setBtnText("Light");
     document.body.style.backgroundColor = "white";
     showAlert("Success", "Light Mode has been enabled");
  }
  
}

  return (
    <>
    <Router>
    <Navbar title= "TextUtils" mode={mode} btnText={btnText} toggleMode={toggleMode}/>
    <div className="container my-3">
      <Alert alert={alert} mode={mode}/>
    </div>
    <div className="container my-3">
      <Routes>
          <Route exact path="/" element={ <TextForm heading= "Enter text to Analyze" mode={mode} showAlert={showAlert}/>}/>
           
          <Route exact path="/About" element={<About/>}/>
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
