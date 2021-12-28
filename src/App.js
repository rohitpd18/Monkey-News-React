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
  const [mode, setMode] = useState('light');
  const [country, setCountry] = useState('in')

  
  const setProg=(progress)=>{
    setProgress(progress)
  }


  const toggleMode=()=>{
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor='#121212';
      let x = document.getElementById("flexSwitchCheckDefault").nextSibling
      x.textContent="Enable Light mode"
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      let x = document.getElementById("flexSwitchCheckDefault").nextSibling
      x.textContent="Enable Dark mode"

    }
  }

  let apiKey="4fb100e2622e48a2858af64f06531373"
  let pageSize=9;
  
  
  return(
      <>
      <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar setCountry={setCountry} country={country} mode={mode} toggleMode={toggleMode} />

        <Routes>
            <Route  exact path='/'             element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="general"      country='in'         pageSize={pageSize} category="general"/>} ></Route>
        
          <Route    exact path={`/${country}`} >
            <Route  exact path=''              element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key={country}       country={country}   pageSize={pageSize} category="general"/>} ></Route>
            <Route  exact path='business'      element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="business"      country={country}   pageSize={pageSize} category="business"/>} ></Route>
            <Route  exact path='entertainment' element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="entertainment" country={country}   pageSize={pageSize} category="entertainment"/>} ></Route>
            <Route  exact path='health'        element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="health"        country={country}   pageSize={pageSize} category="health"/>} ></Route>
            <Route  exact path='science'       element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="science"       country={country}   pageSize={pageSize} category="science"/>} ></Route>
            <Route  exact path='sports'        element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="sports"        country={country}   pageSize={pageSize} category="sports"/>} ></Route>
            <Route  exact path='technology'    element={<News mode={mode}  setProgress={setProg} apiKey={apiKey}  key="technology"    country={country}   pageSize={pageSize} category="technology"/>} ></Route>
          </Route>
        </Routes>

      </Router>
      </>
    );
  }
export default App;
