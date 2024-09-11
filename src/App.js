import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');   // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light' || 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");


    }
  }

  const toggleMode_Green = () => {
    if (mode === 'light' || 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = '#023020';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");


    }
  }

  const toggleMode_Gray = () => {
    if (mode === 'light' || 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = '#3b3b3b';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");


    }
  }



  return (
    <>
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleMode_Green={toggleMode_Green} toggleMode_Gray={toggleMode_Gray} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about"
          element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
        </Routes>
        
      </div>
      </Router>

    </> 
  );

}

export default App;
