import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';


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
    <Navbar title= "TextUtils" mode={mode} btnText={btnText} toggleMode={toggleMode}/>
    <div className="container my-3">
      <Alert alert={alert} mode={mode}/>
    </div>
    <div className="container my-3">
      <TextForm heading= "Enter text to Analyze" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
