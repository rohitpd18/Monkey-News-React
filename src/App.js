import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



function App() {

  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light')

  
  const setProg=(progress)=>{
    setProgress(progress)
  }
  const toggleMode=()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor='black';
      let x = document.getElementById("flexSwitchCheckDefault").nextSibling
      x.textContent="Enable Light mode"
      console.log(x)
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      let x = document.getElementById("flexSwitchCheckDefault").nextSibling
      x.textContent="Enable Dark mode"
      console.log('clicked on button')

    }
  }

  let apiKey="493993f2a9c247bdb51f8ceb0a9d8bbd"
    let pageSize=9;
  return(
      <>
      <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route  exact path="/"  element={< News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="general" country='in' pageSize={pageSize} category="general"/>} ></Route>
          <Route  exact path="/business"  element={<News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="business" country='in' pageSize={pageSize} category="business"/>} ></Route>
          <Route  exact path="/entertainment"  element={<News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="entertainment" country='in' pageSize={pageSize} category="entertainment"/>} ></Route>
          <Route  exact path="/health"  element={<News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="health" country='in' pageSize={pageSize} category="health"/>} ></Route>
          <Route  exact path="/science"  element={<News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="science" country='in' pageSize={pageSize} category="science"/>} ></Route>
          <Route  exact path="/sports"  element={<News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="sports" country='in' pageSize={pageSize} category="sports"/>} ></Route>
          <Route  exact path="/technology"  element={<News mode={mode}   setProgress={setProg} apiKey={apiKey}  key="technology" country='in' pageSize={pageSize} category="technology"/>} ></Route>
        </Routes>

      </Router>
      </>
    );
  }
export default App;
