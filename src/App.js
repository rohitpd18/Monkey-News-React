import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    let pageSize=8;
    return (
      <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar />

        <Routes>
          <Route  exact path="/" element={<News  setProgress={this.setProgress}  key="general" country='in' pageSize={pageSize} category="general"/>} ></Route>
          <Route  exact path="/business" element={<News  setProgress={this.setProgress}  key="business" country='in' pageSize={pageSize} category="business"/>} ></Route>
          <Route  exact path="/entertainment" element={<News  setProgress={this.setProgress}  key="entertainment" country='in' pageSize={pageSize} category="entertainment"/>} ></Route>
          <Route  exact path="/health" element={<News  setProgress={this.setProgress}  key="health" country='in' pageSize={pageSize} category="health"/>} ></Route>
          <Route  exact path="/science" element={<News  setProgress={this.setProgress}  key="science" country='in' pageSize={pageSize} category="science"/>} ></Route>
          <Route  exact path="/sports" element={<News  setProgress={this.setProgress}  key="sports" country='in' pageSize={pageSize} category="sports"/>} ></Route>
          <Route  exact path="/technology" element={<News  setProgress={this.setProgress}  key="technology" country='in' pageSize={pageSize} category="technology"/>} ></Route>
        </Routes>

      </Router>
    );
  }
}
